import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: 'Question', collectionName: string) => {
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
  } catch (err) {
    console.error('Error in cleanDb:', err); // Added this line
    throw err;
  }
};

//changed error