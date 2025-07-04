import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Blur',
	value: OperationType.BLUR,
	description: 'Blur an image',
	action: 'Blur',
};

const displayOptions = {
	show: {
		resource: [ResourceType.IMAGE],
		operation: [OperationType.BLUR],
	},
};

export const description: INodeProperties[] = [
	{
		displayName: 'Data Type',
		name: 'dataType',
		type: 'options',
		noDataExpression: true,
		displayOptions,
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
				...displayOptions.show,
				dataType: ['imageUrl'],
			},
		},
		default: '',
		placeholder: 'https://example.com/image.jpg',
		description: 'The URL of the image to analyze',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.BLUR}`,
				body: {
					imageUrl: '={{$value}}',
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
				...displayOptions.show,
				dataType: ['imageBuffer'],
			},
		},
		default: '',
		placeholder: 'Base64-encoded image data',
		description: 'Base64-encoded image data for text recognition',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.BLUR}`,
				body: {
					buffer: '={{$value}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Sigma Value',
		name: 'sigma',
		type: 'number',
		typeOptions: {
			minValue: 0.3,
			maxValue: 1000,
			numberPrecision: 1,
		},
		displayOptions,
		default: 1.0,
		placeholder: 'Sigma value for blurring',
		description:
			'The sigma value for the Gaussian blur. Minimum value is 0.3, maximum is 1000.0. Higher values result in more blur.',
	},
	{
		displayName: 'Get as URL',
		name: 'getAsUrl',
		type: 'boolean',
		default: false,
		displayOptions,
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
				...displayOptions.show,
				getAsUrl: [true],
			},
		},
		description: 'The filename to use for the generated URL',
	},
];
