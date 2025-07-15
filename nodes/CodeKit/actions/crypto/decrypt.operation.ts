import { INodeProperties } from 'n8n-workflow';
import { crytoMethods } from '../../resources/cryptoMethods';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Decrypt Text',
	value: OperationType.DECRYPT,
	description: 'Decrypt encrypted text using various encryption methods',
	action: 'Decrypt Text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Encrypted Text',
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
		description: 'Encrypted text to decrypt',
		placeholder: 'e.g. U2FsdGVkX1+F...',
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
		description: 'Secret key used for decryption',
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
