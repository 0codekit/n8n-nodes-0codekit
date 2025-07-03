import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Remove Background Image',
	value: OperationType.REMOVE_BACKGROUND,
	description: 'Removes the background from an image using AI',
	action: 'Remove background',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
				dataType: ['imageUrl'],
			},
		},
		default: '',
		placeholder: 'https://example.com/image.jpg',
		description: 'The URL of the image to analyze',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_IMAGE}`,
				body: {
					imageUrl: '={{$value.url}}',
				},
			},
		},
	},
	{
		displayName: 'Image Buffer',
		name: 'imageBuffer',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
				dataType: ['imageBuffer'],
			},
		},
		default: '',
		placeholder: 'Base64-encoded image data',
		description: 'Base64-encoded image data for text recognition',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_IMAGE}`,
				body: {
					buffer: '={{$value.imageBuffer}}',
				},
			},
		},
	},
	{
		displayName: 'Get as URL',
		name: 'getAsUrl',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
			},
		},
		description:
			'Whether to return the result as a URL or as a Base64-encoded image. If true, the result will be a URL to the processed image; if false, it will be a Base64-encoded string.',
	},
	{
		displayName: 'URL Filename',
		name: 'urlFilename',
		type: 'string',
		default: 'image.png',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
				getAsUrl: [true],
			},
		},
		description: 'The filename to use for the generated URL',
	},
];
