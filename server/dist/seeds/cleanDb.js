import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        if (!model || !model.db || !model.db.db) {
            throw new Error(`Model or database reference is undefined for "${modelName}"`);
        }
        const modelExists = await model.db.db
            .listCollections({ name: collectionName })
            .toArray();
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
//changed err
