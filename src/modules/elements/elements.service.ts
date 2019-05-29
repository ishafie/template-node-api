import * as _ from 'lodash';


const conf = global.conf;
const log = global.log.module('elements');

/*async function findAll(page: number, size: number): Promise<any> {
	const elementCollection: Collection = db.collection('elements');
	log.info(size);
	log.info(page);
	return await elementCollection.find().limit(size).skip(page * size).map((element: Element) => {
		return element;
	});
}

async function count(): Promise<number> {
	const elementsCollection: Collection = db.collection('elements');
	return await elementsCollection.count({});
}

export {
	count,
	findAll
};*/