import { INodeProperties } from 'n8n-workflow';
import { crytoMethods } from '../../resources/cryptoMethods';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Encrypt Text',
	value: OperationType.ENCRYPT,
	description: 'Encrypt text using various encryption methods',
	action: 'Encrypt Text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Text message to encrypt',
		placeholder: 'e.g. Hello World, this is a secret message',
	},
	{
		displayName: 'Secret Key',
		name: 'secretKey',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Secret key used for encryption',
		placeholder: 'e.g. mySecretKey123',
	},
	{
		displayName: 'Encryption Algorithm',
		name: 'cryptoType',
		type: 'options',
		options: crytoMethods,
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: 'AES',
		description: 'Encryption algorithm to use',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CRYPTO}/${OperationType.ENCRYPT}`,
				body: {
					message: '={{$parameter.message}}',
					secretKey: '={{$parameter.secretKey}}',
					cryptoType: '={{$parameter.cryptoType}}',
				},
			},
		},
	},
];
