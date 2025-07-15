import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Get Website Logo',
	value: OperatorOperation.LOGO,
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
				operation: [OperatorOperation.LOGO],
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
				operation: [OperatorOperation.LOGO],
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
