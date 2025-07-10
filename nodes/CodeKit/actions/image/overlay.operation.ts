import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Overlay',
	value: OperationType.OVERLAY,
	description: 'Overlay an image',
	action: 'Overlay',
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
				operation: [OperationType.OVERLAY],
			},
		},
		default: 'url',
		description: 'Type of data to process',
	},
	{
		displayName: 'URL',
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
		description: 'URL of the image to overlay',
	},
	{
		displayName: 'Buffer',
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
		description: 'Buffer of the image to overlay',
	},
	{
		displayName: 'Overlay URL',
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
	},
	{
		displayName: 'Overlay Buffer',
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
		description: 'Buffer of the overlay image',
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
		description: 'X position for the overlay',
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
		description: 'Y position for the overlay',
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
