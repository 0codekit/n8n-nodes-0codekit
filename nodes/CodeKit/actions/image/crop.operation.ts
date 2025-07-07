import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Crop',
	value: OperationType.CROP,
	description: 'Crop an image',
	action: 'Crop',
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
				operation: [OperationType.CROP],
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
				operation: [OperationType.CROP],
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
				operation: [OperationType.CROP],
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
		displayName: 'Options Cropping',
		name: 'options',
		type: 'json',
		displayOptions: {
			show: {
				operation: [OperationType.CROP],
				resource: ['image'],
			},
		},
		default: JSON.stringify({
			top: 0,
			left: 0,
			width: 100,
			height: 100,
		}),
		description: 'Cropping options including top, left, width, height',
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
		default: OperationType.CROP,
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
				url: '/image/crop',
			},
		},
	},
];
