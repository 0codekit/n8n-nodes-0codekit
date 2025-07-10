import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'HTML to Image',
	value: OperationType.HTML,
	description: 'Convert HTML to an image',
	action: 'Html to image',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Type of Data',
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
	},
	{
		displayName: 'HTML',
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
		description: 'HTML to convert to an image',
	},
	{
		displayName: 'URL',
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
		description: 'URL of the HTML page to convert to an image',
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
