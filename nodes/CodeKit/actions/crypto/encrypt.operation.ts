import { INodeProperties } from 'n8n-workflow';
import { crytoMethods } from '../../resources/cryptoMethods';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Encrypt a Message',
	value: OperationType.ENCRYPT,
	description: 'Encrypts a message with a selected method',
	action: 'Encrypt a message',
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
		description: 'Message you want to encrypt',
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
		description: 'Secret key for encryption',
	},
	{
		displayName: 'Crypto Type',
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
