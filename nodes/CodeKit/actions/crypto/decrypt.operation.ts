import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Decrypt a Ciphertext',
	value: OperationType.DECRYPT,
	description: 'Decrypts a ciphertext with a selected method',
	action: 'Decrypt a ciphertext',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Ciphertext',
		name: 'ciphertext',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.DECRYPT],
			},
		},
		default: '',
		description: 'Cyphertext you want to decrypt',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CRYPTO}/${OperationType.DECRYPT}`,
				body: {
					ciphertext: '={{$value.ciphertext}}',
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
				operation: [OperationType.DECRYPT],
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
				operation: [OperationType.DECRYPT],
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
				operation: [OperationType.DECRYPT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.CRYPTO/OperationType.DECRYPT,
				body: {
					
				},
			},
		},
	},
];