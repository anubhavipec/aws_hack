import random
import uuid

import boto3
from boto3.dynamodb.conditions import Key
from botocore.client import Config




def lambda_handler(event,context):
   


    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table("hack_agg_data")
    
    result = table.scan()['Items']
   





    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': result
    };