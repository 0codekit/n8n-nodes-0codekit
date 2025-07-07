import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Sharpen',
	value: OperationType.SHARPEN,
	description: 'Sharpen an image',
	action: 'Sharpen',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Type of Data',
		name: 'urlbuffertype',
		type: 'options',
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'Buffer',
				value: 'buffer',
			},
		],
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.SHARPEN],
				resource: ['image'],
			},
		},
		default: 'url',
		routing: {
			send: {
				type: 'body',
				property: 'urlbuffertype',
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.SHARPEN],
				resource: ['image'],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'This is the URL of the image, must be publicly accessible',
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.SHARPEN],
				resource: ['image'],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Buffer of the image',
		routing: {
			send: {
				type: 'body',
				property: 'buffer',
			},
		},
	},
	{
		displayName: 'Sigma',
		name: 'sigma',
		type: 'number',
		displayOptions: {
			show: {
				operation: [OperationType.SHARPEN],
				resource: ['image'],
			},
		},
		default: 1,
		description: 'Sigma of the image',
		routing: {
			send: {
				type: 'body',
				property: 'sigma',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.SHARPEN,
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
				url: '/image/sharpen',
			},
		},
	},
];
