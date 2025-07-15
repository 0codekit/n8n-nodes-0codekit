import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Blur Image',
	value: OperationType.BLUR,
	description: 'Apply blur effect to an image',
	action: 'Blur Image',
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
				description: 'Use an image URL for blurring',
				action: 'Use image URL for blurring',
			},
			{
				name: 'Use Image Buffer',
				value: 'imageBuffer',
				description: 'Use a Base64-encoded image for blurring',
				action: 'Use image buffer for blurring',
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
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'URL of the image to blur',
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
		placeholder: 'e.g. data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...',
		description: 'Base64-encoded image data for blurring',
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
		placeholder: 'e.g. 2.5',
		description:
			'Sigma value for Gaussian blur intensity. Higher values create more blur (0.3-1000.0).',
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
		description: 'Filename to use when returning as URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
				operation: [OperationType.BLUR],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.IMAGE}/${OperationType.BLUR}`,
				body: {
					dataType: '={{$parameter.dataType}}',
					url: '={{$parameter.url}}',
					imageBuffer: '={{$parameter.imageBuffer}}',
					sigma: '={{$parameter.sigma}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					urlFilename: '={{$parameter.urlFilename}}',
				},
			},
		},
	},
];
