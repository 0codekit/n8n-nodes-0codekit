import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Crop Image',
	value: OperationType.CROP,
	description: 'Crop a portion of an image',
	action: 'Crop Image',
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
				operation: [OperationType.CROP],
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
				operation: [OperationType.CROP],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'URL of the image to crop (must be publicly accessible)',
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
				operation: [OperationType.CROP],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Base64-encoded image data to crop',
		placeholder: 'e.g. data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...',
	},
	{
		displayName: 'Crop Settings',
		name: 'options',
		type: 'json',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CROP],
			},
		},
		default: JSON.stringify({
			top: 0,
			left: 0,
			width: 100,
			height: 100,
		}),
		description: 'Crop dimensions and position settings',
		placeholder: 'e.g. {"top": 50, "left": 50, "width": 200, "height": 200}',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.CROP],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.CROP}`,
				body: {
					urlbuffertype: '={{$parameter.urlbuffertype}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					options: '={{$parameter.options}}',
				},
			},
		},
	},
];
