import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Sharpen Image',
	value: OperationType.SHARPEN,
	description: 'Sharpen an image to enhance details',
	action: 'Sharpen Image',
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
				operation: [OperationType.SHARPEN],
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
				operation: [OperationType.SHARPEN],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'URL of the image to sharpen (must be publicly accessible)',
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
				operation: [OperationType.SHARPEN],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Base64-encoded image data to sharpen',
		placeholder: 'e.g. data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...',
	},
	{
		displayName: 'Sigma Value',
		name: 'sigma',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.SHARPEN],
			},
		},
		default: 1,
		description: 'Sigma value for sharpening intensity',
		placeholder: 'e.g. 1.5',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.SHARPEN],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/sharpen`,
				body: {
					urlbuffertype: '={{$parameter.urlbuffertype}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					sigma: '={{$parameter.sigma}}',
				},
			},
		},
	},
];
