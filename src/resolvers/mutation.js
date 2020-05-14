import * as dynamoDBlib from "../../libs/dynamodb-lib";
import v1 from "uuid/v1";

console.log('v1', v1());
//ADD BOOK
export const addBook = async ({
    input: args
}, context) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            objectId: `book-${v1()}`,
            objectName: "book",
            author: args.author,
            ISBN: args.ISBN,
            vendor: args.vendor,
            title: args.title,
        }
    }

    try {
        await dynamoDBlib.call("put", params);

        return {
            objectId: params.Item.objectId,
            objectName: params.Item.objectName,
            author: args.author,
            ISBN: args.ISBN,
            dateUploaded: Date.now(),
            vendor: args.vendor,
            title: args.title,
        }
    } catch (e) {
        return e
    }
}