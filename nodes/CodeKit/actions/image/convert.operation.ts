import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert',
	value: OperationType.CONVERT,
	description: 'Convert an image',
	action: 'Convert',
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
				operation: [OperationType.CONVERT],
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
				operation: [OperationType.CONVERT],
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
				operation: [OperationType.CONVERT],
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
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{ name: 'JPEG', value: 'jpeg' },
			{ name: 'PNG', value: 'png' },
			{ name: 'WebP', value: 'webp' },
			{ name: 'GIF', value: 'gif' },
			{ name: 'TIFF', value: 'tiff' },
			{ name: 'BMP', value: 'bmp' },
		],
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.CONVERT],
				resource: ['image'],
			},
		},
		default: 'jpeg',
		routing: {
			send: {
				type: 'body',
				property: 'format',
			},
		},
	},
	{
		displayName: 'With Metadata',
		name: 'withMetaData',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [OperationType.CONVERT],
				resource: ['image'],
			},
		},
		default: false,
		description: 'Whether to include metadata in the converted image',
		routing: {
			send: {
				type: 'body',
				property: 'withMetaData',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'json',
		displayOptions: {
			show: {
				operation: [OperationType.CONVERT],
				resource: ['image'],
			},
		},
		default: JSON.stringify({
			quality: 40,
		}),
		description: 'Additional options to pass to the convert operation',
		routing: {
			send: {
				type: 'body',
				property: 'options',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.CONVERT,
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
				url: '/image/convert',
			},
		},
	},
];
