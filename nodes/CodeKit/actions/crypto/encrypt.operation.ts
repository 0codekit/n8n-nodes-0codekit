import { INodeProperties } from 'n8n-workflow';
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
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CRYPTO}/${OperationType.ENCRYPT}`,
				body: {
					message: '={{$value.message}}',
				},
			},
		},
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
	},
	{
		displayName: 'Crypto Type',
		name: 'cryptoType',
		type: 'options',
		options: [
			{ name: 'AES', value: 'AES' },
			{ name: 'DES', value: 'DES' },
			{ name: 'Rabbit', value: 'Rabbit' },
			{ name: 'RC4', value: 'RC4' },
			{ name: 'RC4Drop', value: 'RC4Drop' },
			{ name: 'TripleDES', value: 'TripleDES' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: 'AES',
	},	{
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
				url: /ResourceType.CRYPTO/OperationType.ENCRYPT,
				body: {
					
				},
			},
		},
	},
];