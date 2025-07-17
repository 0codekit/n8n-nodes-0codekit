import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Expand Shortened URL',
	value: OperationType.URL_EXPANDER,
	description: 'Expand shortened URL to full URL',
	action: 'Expand shortened URL to full URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Shortened URL',
		name: 'shortenedUrl',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://bit.ly/3xyz123',
		description: 'Shortened URL to expand to full URL',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.URL_EXPANDER],
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
				operation: [OperationType.URL_EXPANDER],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/urlexpander`,
				body: {
					shortenedUrl: '={{$parameter.shortenedUrl}}',
				},
			},
		},
	},
];
