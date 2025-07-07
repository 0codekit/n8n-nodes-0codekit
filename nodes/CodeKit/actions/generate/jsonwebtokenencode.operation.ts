import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Encode JSON Web Token',
	value: OperationType.JSONWEBTOKEN_ENCODE,
	description: 'Encode a JSON Web Token',
	action: 'Encode a json web token',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Payload',
		name: 'payload',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_ENCODE],
			},
		},
		default: '',
		description: 'JSON payload to encode',
		placeholder: '{"sub": "1234567890", "name": "John Doe"}',
	},
	{
		displayName: 'Secret',
		name: 'secret',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_ENCODE],
			},
		},
		default: '',
		description: 'Secret key for signing the token',
	},
	{
		displayName: 'Algorithm',
		name: 'algorithm',
		type: 'options',
		options: [
			{ name: 'HS256', value: 'HS256' },
			{ name: 'HS384', value: 'HS384' },
			{ name: 'HS512', value: 'HS512' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_ENCODE],
			},
		},
		default: 'HS256',
		description: 'Algorithm to use for signing',
	},
	{
		displayName: 'Expires In',
		name: 'expiresIn',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_ENCODE],
			},
		},
		default: '',
		description: 'Token expiration time (e.g., "1h", "7d", "30m")',
		placeholder: '1h',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_ENCODE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/jsonwebtoken/encode`,
				body: {
					payload: '={{$parameter.payload}}',
					secret: '={{$parameter.secret}}',
					algorithm: '={{$parameter.algorithm}}',
					expiresIn: '={{$parameter.expiresIn}}',
				},
			},
		},
	},
];
