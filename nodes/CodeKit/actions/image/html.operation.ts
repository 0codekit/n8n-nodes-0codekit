import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert HTML to Image',
	value: OperationType.HTML,
	description: 'Convert HTML content or webpage to image',
	action: 'Convert HTML to Image',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Data Type',
		name: 'htmlurltype',
		type: 'options',
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'HTML',
				value: 'html',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.HTML],
			},
		},
		default: 'url',
		description: 'Choose data source type',
	},
	{
		displayName: 'HTML Content',
		name: 'html',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.HTML],
				htmlurltype: ['html'],
			},
		},
		default: '',
		description: 'HTML content to convert to image',
		placeholder: 'e.g. <h1>Hello World</h1><p>This is a test</p>',
	},
	{
		displayName: 'Webpage URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.HTML],
				htmlurltype: ['url'],
			},
		},
		default: '',
		description: 'URL of the webpage to convert to image',
		placeholder: 'e.g. https://example.com',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.HTML],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.HTML}`,
				body: {
					htmlurltype: '={{$parameter.htmlurltype}}',
					html: '={{$parameter.html}}',
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
