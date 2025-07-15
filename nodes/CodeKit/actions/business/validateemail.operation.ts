import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate Email',
	value: OperationType.VALIDATE_EMAIL,
	description: 'Validate email address format and deliverability',
	action: 'Validate email address format',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Email Address',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. user@example.com',
		description: 'The email address to validate for format and deliverability',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_EMAIL],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_EMAIL],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_EMAIL}`,
				body: {
					email: '={{$parameter.email}}',
				},
			},
		},
	},
];
