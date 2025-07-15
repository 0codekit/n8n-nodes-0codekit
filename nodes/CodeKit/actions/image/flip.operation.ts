import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Flip Image',
	value: OperationType.FLIP,
	description: 'Flip an image horizontally or vertically',
	action: 'Flip Image',
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
				operation: [OperationType.FLIP],
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
				operation: [OperationType.FLIP],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'URL of the image to flip (must be publicly accessible)',
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
				operation: [OperationType.FLIP],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Base64-encoded image data to flip',
		placeholder: 'e.g. data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.FLIP],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.FLIP}`,
				body: {
					urlbuffertype: '={{$parameter.urlbuffertype}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
				},
			},
		},
	},
];
