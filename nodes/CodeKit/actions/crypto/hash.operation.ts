import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Hash a Text',
	value: OperationType.HASH,
	description: 'Hashes a text with selected methods',
	action: 'Hash a text',
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
		description: 'Message you want to hash',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CRYPTO}/${OperationType.HASH}`,
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
				operation: [OperationType.HASH],
			},
		},
		default: '',
	},
	{
		displayName: 'Hash Type',
		name: 'hashType',
		type: 'options',
		options: [
			{ name: 'HmacMD5', value: 'HmacMD5' },
			{ name: 'HmacSHA1', value: 'HmacSHA1' },
			{ name: 'HmacSHA224', value: 'HmacSHA224' },
			{ name: 'HmacSHA256', value: 'HmacSHA256' },
			{ name: 'HmacSHA384', value: 'HmacSHA384' },
			{ name: 'HmacSHA512', value: 'HmacSHA512' },
			{ name: 'MD5', value: 'MD5' },
			{ name: 'RIPEMD160', value: 'RIPEMD160' },
			{ name: 'SHA1', value: 'SHA1' },
			{ name: 'SHA224', value: 'SHA224' },
			{ name: 'SHA256', value: 'SHA256' },
			{ name: 'SHA3', value: 'SHA3' },
			{ name: 'SHA384', value: 'SHA384' },
			{ name: 'SHA512', value: 'SHA512' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
				operation: [OperationType.HASH],
			},
		},
		default: 'SHA256',
	},	{
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
				url: /ResourceType.CRYPTO/OperationType.HASH,
				body: {
					
				},
			},
		},
	},
];