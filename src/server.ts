import n9Log from '@neo9/n9-node-log'
import n9Micro from '@neo9/n9-node-micro'
import n9Conf from '@neo9/n9-node-conf'
import { join } from 'path';
 
const conf = global.conf = n9Conf({ path: join(__dirname, 'conf') });
const log = global.log = n9Log(conf.name, conf.log);

// Load loaded configuration
log.info(`Conf loaded: ${conf.env}`);

export default async function start(): Promise<void> {
	// Profile startup boot time
	log.profile('startup');
	// Load modules
	const { app, server } = await n9Micro({
		path: join(__dirname, 'modules'),
		http: conf.http
	});

	// Log the startup time
	log.profile('startup');
}

// tslint:disable:no-floating-promises
start();