import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
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
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
			},
		},
		default: 'url',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'This is the URL of the image, must be publicly accessible',
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Buffer of the image',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{ name: 'BMP', value: 'bmp' },
			{ name: 'GIF', value: 'gif' },
			{ name: 'JPEG', value: 'jpeg' },
			{ name: 'PNG', value: 'png' },
			{ name: 'TIFF', value: 'tiff' },
			{ name: 'WebP', value: 'webp' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
			},
		},
		default: 'jpeg',
	},
	{
		displayName: 'With Metadata',
		name: 'withMetaData',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
			},
		},
		default: false,
		description: 'Whether to include metadata in the converted image',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'json',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
			},
		},
		default: JSON.stringify({
			quality: 40,
		}),
		description: 'Additional options to pass to the convert operation',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.CONVERT}`,
				body: {
					urlbuffertype: '={{$parameter.urlbuffertype}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					format: '={{$parameter.format}}',
					withMetaData: '={{$parameter.withMetaData}}',
					options: '={{$parameter.options}}',
				},
			},
		},
	},
];
