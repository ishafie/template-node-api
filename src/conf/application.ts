import { Conf } from './index.models';

const conf: Conf = {
	http: {
		port: 5000
	},
	jwt: {
		secret: 'XMZbGNTUV8axpxjXQLOvXMZbGNTUV8axpxjXQLOvXMZbGNTUV8axpxjXQLOvdq7BjY3Pm836cqRYFIZB',
		sessionMaxAgeSec: 14400 // 4h
	},
	password: {
		reset: {
			recoveryTime: 86400,
			previous: 5
		},
		countError: 5
	},
	session: {
		validCredentialsTime: 60,
		lockDuration: 600, // in seconds
	},
};

export default conf;
