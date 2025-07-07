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
		displayName: 'Data Type',
		name: 'dataType',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
			},
		},
		options: [
			{
				name: 'Use Image URL',
				value: 'imageUrl',
				description: 'Use an image URL for background removal',
				action: 'Use image URL for background removal',
			},
			{
				name: 'Use Image Buffer',
				value: 'imageBuffer',
				description: 'Use a Base64-encoded image for background removal',
				action: 'Use image buffer for background removal',
			},
		],
		default: 'imageUrl',
	},
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
				dataType: ['imageUrl'],
			},
		},
		default: '',
		placeholder: 'https://example.com/image.jpg',
		description: 'The URL of the image to analyze',
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
				operation: [OperationType.REMOVE_BACKGROUND],
				dataType: ['imageBuffer'],
			},
		},
		default: '',
		placeholder: 'Base64-encoded image data',
		description: 'Base64-encoded image data for text recognition',
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
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.REMOVE_BACKGROUND}`,
				body: {
					dataType: '={{$parameter.dataType}}',
					url: '={{$parameter.url}}',
					imageBuffer: '={{$parameter.imageBuffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					urlFilename: '={{$parameter.urlFilename}}',
				},
			},
		},
	},
];
