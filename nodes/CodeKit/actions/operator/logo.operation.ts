import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get Website Logo',
	value: OperationType.LOGO,
	description: 'Extract logo URL from website',
	action: 'Extract logo URL from website',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com',
		description: 'Website URL to extract logo from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.LOGO],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.LOGO],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/logo`,
				body: {
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
