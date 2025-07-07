import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'URL Expander',
	value: OperatorOperation.URL_EXPANDER,
	description: 'Expand shortened URL',
	action: 'Expand shortened URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Shortened URL',
		name: 'shortenedUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'Shortened URL to expand',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.URL_EXPANDER],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/urlexpander',
				body: {
					shortenedUrl: '={{$value.shortenedUrl}}',
				},
			},
		},
	},
];
