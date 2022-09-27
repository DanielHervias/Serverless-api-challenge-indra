"use strict";

const AWS = require("aws-sdk");

module.exports.put_item = async (table_name, new_item) => {
  console.log("[POST - DYNAMO SERVICE] put_item");

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb
    .put({
      TableName: table_name,
      Item: new_item,
    })
    .promise();
};

module.exports.get_item_by_id = async (table_name, id) => {
  console.log("[GET - DYNAMO SERVICE] get_item_by_id");

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const item = await dynamodb
    .get({
      TableName: table_name,
      Key: {
        id,
      },
    })
    .promise();

  return item.Item;
};

module.exports.get_all_items = async (table_name) => {
  console.log("[GET - DYNAMO SERVICE] get_all_items");

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const items = await dynamodb
    .scan({
      TableName: table_name,
    })
    .promise();

  return items;
};
