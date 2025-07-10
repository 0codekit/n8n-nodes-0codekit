import { INodeProperties } from 'n8n-workflow';
import { crytoMethods } from '../../resources/cryptoMethods';
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
		description: 'Secret key for decryption',
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
				operation: [OperationType.DECRYPT],
			},
		},
		default: 'AES',
		description: 'Encryption algorithm to use for decryption',
	},
	{
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
				url: `/${ResourceType.CRYPTO}/${OperationType.DECRYPT}`,
				body: {
					ciphertext: '={{$parameter.ciphertext}}',
					secretKey: '={{$parameter.secretKey}}',
					cryptoType: '={{$parameter.cryptoType}}',
				},
			},
		},
	},
];
