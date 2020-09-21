import random
import uuid

import boto3
from boto3.dynamodb.conditions import Key
from botocore.client import Config




def lambda_handler(event,context):


    locations_list = list()
    locations_list.append("Rave 3,Kanpur")
    locations_list.append("Rave Moti,Kanpur")
    locations_list.append("Z Square Mall,Kanpur")
    locations_list.append("Sharda Nagar,Kanpur")
    locations_list.append("Birhana Road ,Kanpur")



    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table("hack_raw_data")
    for places in locations_list:
        rand_temp = random.randint(33, 42)
        uuid_key = uuid.uuid1()
        dict_obj= {"uuid":str(uuid_key),"location":places,"temp":rand_temp}
        table.put_item(Item=dict_obj)

    response_dict = dict()
    result = table.scan()['Items']
    print(result)
    for data in result:
        if data["location"] in response_dict:
            response_dict[data["location"]] = { "temp":response_dict[data["location"]]["temp"] + data["temp"],"ctr":response_dict[data["location"]]["ctr"]+1}


        else:
            response_dict[data["location"]] = {"temp":data["temp"],"ctr":1}

    print(response_dict)

    update_response_list = list()

    for key,value in response_dict.items():
        update_dict = dict()
        update_dict['location'] = key
        update_dict['temp'] = round(value['temp']/value['ctr'],1)
        update_response_list.append(update_dict)
    table_agg = dynamodb.Table("hack_agg_data")
    for update_dict_in_agg in update_response_list:
        table_agg.update_item(

            Key={
                'location':update_dict_in_agg['location']
            },
            UpdateExpression="set #tmp = :t",
            ExpressionAttributeValues={
                ":t":update_dict_in_agg['temp']
            },
        ExpressionAttributeNames = {
            "#tmp": "temp"
        }

        )


