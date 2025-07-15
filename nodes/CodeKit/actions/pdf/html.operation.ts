import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert HTML to PDF',
	value: OperationType.HTML,
	description: 'Convert HTML content or webpage to PDF document',
	action: 'Convert HTML content or webpage to PDF document',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Source Type',
		name: 'htmlSource',
		type: 'options',
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'HTML Code',
				value: 'html',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
			},
		},
		default: 'url',
		description: 'Source type for HTML content',
	},
	{
		displayName: 'HTML Content',
		name: 'html',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
				htmlSource: ['html'],
			},
		},
		default: '',
		placeholder: '<html><body><h1>Hello World</h1></body></html>',
		description: 'HTML content to convert to PDF',
	},
	{
		displayName: 'Website URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
				htmlSource: ['url'],
			},
		},
		default: '',
		placeholder: 'https://example.com',
		description: 'URL of the webpage to convert to PDF',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.HTML}`,
				body: {
					htmlSource: '={{$parameter.htmlSource}}',
					html: '={{$parameter.html}}',
					url: '={{$parameter.url}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
