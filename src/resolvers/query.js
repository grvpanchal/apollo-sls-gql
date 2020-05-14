import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getBooksByTitle = async (args, context) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        KeyConditionExpression: "title = :title",
        ExpressionAttributeValues: {
            ":title": args.title
        }
    }

    try {
        const result = await dynamoDBLib.call("query", params);
        if (result.Items) {
            return result.Items;
        } else {
            return "You have no products"
        }
    } catch (e) {
        return e;
    }
}

export const getBooks = async (args, context) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Select: "ALL_ATTRIBUTES"
    }

    try {
        const result = await dynamoDBLib.call("scan", params);
        console.log(result);
        if (result.Items) {
            return result.Items;
        } else {
            return "You have no products"
        }
    } catch (e) {
        return e;
    }
}