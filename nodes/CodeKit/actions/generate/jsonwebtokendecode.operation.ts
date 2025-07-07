import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Decode JSON Web Token',
	value: OperationType.JSONWEBTOKEN_DECODE,
	description: 'Decode a JSON Web Token',
	action: 'Decode a json web token',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_DECODE],
			},
		},
		default: '',
		description: 'JWT token to decode',
	},
	{
		displayName: 'Secret',
		name: 'secret',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_DECODE],
			},
		},
		default: '',
		description: 'Secret key for verifying the token (optional for decode without verification)',
	},
	{
		displayName: 'Verify Signature',
		name: 'verify',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_DECODE],
			},
		},
		default: true,
		description: 'Whether to verify the token signature',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.JSONWEBTOKEN_DECODE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/jsonwebtoken/decode`,
				body: {
					token: '={{$parameter.token}}',
					secret: '={{$parameter.secret}}',
					verify: '={{$parameter.verify}}',
				},
			},
		},
	},
];
