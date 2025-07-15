import { INodeProperties } from 'n8n-workflow';
import { hashMethods } from '../../resources/hashMethods';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Hash Text',
	value: OperationType.HASH,
	description: 'Generate hash from text using various hash methods',
	action: 'Hash Text',
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
				operation: [OperationType.HASH],
			},
		},
		default: '',
		description: 'Text message to hash',
		placeholder: 'e.g. Hello World',
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
				operation: [OperationType.HASH],
			},
		},
		default: '',
		description: 'Secret key for HMAC hashing (leave empty for non-HMAC methods)',
		placeholder: 'e.g. mySecretKey123',
	},
	{
		displayName: 'Hash Algorithm',
		name: 'hashType',
		type: 'options',
		options: hashMethods,
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.HASH],
			},
		},
		default: 'SHA256',
		description: 'Hash algorithm to use',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.HASH],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CRYPTO}/${OperationType.HASH}`,
				body: {
					message: '={{$parameter.message}}',
					secretKey: '={{$parameter.secretKey}}',
					hashType: '={{$parameter.hashType}}',
				},
			},
		},
	},
];
