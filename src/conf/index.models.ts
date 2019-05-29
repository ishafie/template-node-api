import { N9Log } from '@neo9/n9-node-log';

export interface Conf {
	http?: {
		port: number
	};
	jwt?: {
		secret: string,
		sessionMaxAgeSec: number
	};
	log?: N9Log.Options;
	mongo?: {
		url: string
    };
    password?: {
		reset: {
			// Time to reset password after mail is sent (in second)
			recoveryTime: number;
			// New Password must be different of the X previous password
			previous: number
		},
		countError: number;
	};
	session?: {
		validCredentialsTime: number;
		lockDuration: number; // seconds
	};
	env?: string;
	name?: string;
	version?: string;
}