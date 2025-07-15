import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Brand',
	value: OperationType.DETECT_BRAND,
	description: 'Detect brands and logos in images using AI analysis',
	action: 'Detect brand in image',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'imageUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_BRAND],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'The URL of the image to analyze for brand detection',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_BRAND],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.DETECT_BRAND}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
				},
			},
		},
	},
];
