import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'HTML to PDF',
	value: OperationType.HTML,
	description: 'Converts HTML Code or a URL to PDF with options',
	action: 'Html to pdf a pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Type of Data',
		name: 'htmlSource',
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
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
			},
		},
		default: 'url',
	},
	{
		displayName: 'HTML',
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
		description: 'HTML content to convert to PDF',
	},
	{
		displayName: 'URL',
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
		description: 'URL of the HTML page to convert to PDF',
	},
	{
		displayName: 'Get File as URL',
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
		description: 'Whether you want the PDF as an URL',
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
				url: `/${ResourceType.PDF}/html`,
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
