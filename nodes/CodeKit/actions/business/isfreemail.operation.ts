import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Check Free Email Provider',
	value: OperationType.IS_FREE_MAIL,
	description: 'Check if an email address uses a free email provider service',
	action: 'Check if email uses free provider',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Email Address',
		name: 'email',
		type: 'string',
		required: true,
		placeholder: 'e.g. user@gmail.com',
		default: '',
		description: 'The email address to check for free provider usage',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.IS_FREE_MAIL],
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
				operation: [OperationType.IS_FREE_MAIL],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.IS_FREE_MAIL}`,
				body: {
					email: '={{$parameter.email}}',
				},
			},
		},
	},
];
