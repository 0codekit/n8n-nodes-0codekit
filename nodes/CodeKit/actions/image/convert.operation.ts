import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert Image Format',
	value: OperationType.CONVERT,
	description: 'Convert image to different format',
	action: 'Convert Image Format',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Data Type',
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
		description: 'Choose data source type',
	},
	{
		displayName: 'Image URL',
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
		description: 'URL of the image to convert (must be publicly accessible)',
		placeholder: 'e.g. https://example.com/image.jpg',
	},
	{
		displayName: 'Image Buffer',
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
		description: 'Base64-encoded image data to convert',
		placeholder: 'e.g. data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...',
	},
	{
		displayName: 'Target Format',
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
		description: 'Image format to convert to',
	},
	{
		displayName: 'Include Metadata',
		name: 'withMetaData',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CONVERT],
			},
		},
		default: false,
		description: 'Whether to preserve metadata in the converted image',
	},
	{
		displayName: 'Conversion Options',
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
		description: 'Additional conversion options (e.g., quality for JPEG)',
		placeholder: 'e.g. {"quality": 80}',
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
