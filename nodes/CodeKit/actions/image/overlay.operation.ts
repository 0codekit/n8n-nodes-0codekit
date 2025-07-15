import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Overlay Images',
	value: OperationType.OVERLAY,
	description: 'Overlay one image onto another',
	action: 'Overlay Images',
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
				operation: [OperationType.OVERLAY],
			},
		},
		default: 'url',
		description: 'Choose data source type',
	},
	{
		displayName: 'Base Image URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'URL of the base image',
		placeholder: 'e.g. https://example.com/base-image.jpg',
	},
	{
		displayName: 'Base Image Buffer',
		name: 'buffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Base64-encoded base image data',
		placeholder: 'e.g. data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...',
	},
	{
		displayName: 'Overlay Image URL',
		name: 'overlayurl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
				urlbuffertype: ['url'],
			},
		},
		default: '',
		description: 'URL of the overlay image',
		placeholder: 'e.g. https://example.com/overlay-image.png',
	},
	{
		displayName: 'Overlay Image Buffer',
		name: 'overlaybuffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
				urlbuffertype: ['buffer'],
			},
		},
		default: '',
		description: 'Base64-encoded overlay image data',
		placeholder:
			'e.g. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
	},
	{
		displayName: 'X Position',
		name: 'x',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
			},
		},
		default: 0,
		description: 'Horizontal position for the overlay (in pixels)',
		placeholder: 'e.g. 100',
	},
	{
		displayName: 'Y Position',
		name: 'y',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
			},
		},
		default: 0,
		description: 'Vertical position for the overlay (in pixels)',
		placeholder: 'e.g. 50',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.OVERLAY],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/overlay`,
				body: {
					urlbuffertype: '={{$parameter.urlbuffertype}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					overlayurl: '={{$parameter.overlayurl}}',
					overlaybuffer: '={{$parameter.overlaybuffer}}',
					x: '={{$parameter.x}}',
					y: '={{$parameter.y}}',
				},
			},
		},
	},
];
