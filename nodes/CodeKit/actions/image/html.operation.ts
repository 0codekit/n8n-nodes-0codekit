import type { INodeProperties } from 'n8n-workflow';
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
				operation: [OperationType.HTML],
				resource: ['image'],
			},
		},
		default: 'url',
		routing: {
			send: {
				type: 'body',
				property: 'htmlurltype',
			},
		},
	},
	{
		displayName: 'HTML',
		name: 'html',
		type: 'string',
		displayOptions: {
			show: {
				operation: [OperationType.HTML],
				resource: ['image'],
				htmlurltype: ['html'],
			},
		},
		default: '',
		description: 'HTML to convert to an image',
		routing: {
			send: {
				type: 'body',
				property: 'html',
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: [OperationType.HTML],
				resource: ['image'],
				htmlurltype: ['url'],
			},
		},
		default: '',
		description: 'URL of the HTML page to convert to an image',
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.HTML,
		routing: {
			send: {
				type: 'body',
				property: 'operation',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'body',
						},
					},
				],
			},
			request: {
				method: 'POST',
				url: '/image/html',
			},
		},
	},
];
