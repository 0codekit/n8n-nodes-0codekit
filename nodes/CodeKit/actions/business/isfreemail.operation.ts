import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Check Free Email',
	value: OperationType.IS_FREE_MAIL,
	description: 'Checks whether the email address is from a free email provider',
	action: 'Check Free Email',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		placeholder: 'name@email.com',
		default: '',
		description: 'The email address to check',
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
