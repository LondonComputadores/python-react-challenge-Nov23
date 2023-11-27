import boto3
import json
import datetime


def handler(event, context):
    """
    Trata um arquivo CSV e salva os dados em um banco de dados DynamoDB.

    Args:
        event: Objeto com os parâmetros da requisição HTTP.
        context: Objeto com informações sobre o contexto de execução do Lambda.

    Returns:
        None
    """

    bucket_name = event["bucket_name"]
    object_key = event["object_key"]

    s3 = boto3.resource("s3")
    csv_file = s3.Object(bucket_name, object_key)

    csv_reader = csv.reader(csv_file.get()["Body"].decode("utf-8").splitlines())
    next(csv_reader, None)  # Pula a linha de cabeçalho

    data = []
    for row in csv_reader:
        data.append({
            "cpf": row[0],
            "cnpj": row[1],
            "data_inicio": datetime.datetime.strptime(row[2], "%d/%m/%Y"),
            "data_fim": datetime.datetime.strptime(row[3], "%d/%m/%Y"),
        })

    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("cessao_fundo")

    for item in data:
        table.put_item(Item=item)

    # Publica uma mensagem na fila SQS

    sqs = boto3.resource("sqs")
    queue = sqs.Queue("cessao_fundo_queue")
    queue.send_message(MessageBody="Arquivo processado com sucesso")

    # Envia uma notificação para um tópico SNS

    sns = boto3.client("sns")
    sns.publish(
        TopicArn="arn:aws:sns:us-east-1:123456789012:cessao_fundo_topic",
        Subject="Arquivo processado",
        Message="O arquivo cession_fundo.csv foi processado com sucesso",
    )

    return None
