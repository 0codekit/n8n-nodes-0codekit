import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Resize Image',
	value: OperationType.RESIZE,
	description: 'Resize an image to specified dimensions',
	action: 'Resize Image',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'imageUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.RESIZE],
			},
		},
		default: '',
		description: 'URL of the image to resize (must be publicly accessible)',
		placeholder: 'e.g. https://example.com/image.jpg',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.RESIZE],
			},
		},
		default: 800,
		description: 'New width in pixels',
		placeholder: 'e.g. 800',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.RESIZE],
			},
		},
		default: 600,
		description: 'New height in pixels',
		placeholder: 'e.g. 600',
	},
	{
		displayName: 'Maintain Aspect Ratio',
		name: 'maintainAspectRatio',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.RESIZE],
			},
		},
		default: true,
		description: 'Whether to maintain the original aspect ratio',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.RESIZE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.RESIZE}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
					maintainAspectRatio: '={{$parameter.maintainAspectRatio}}',
				},
			},
		},
	},
];
