import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Color',
	value: OperationType.DETECT_COLOR,
	description: 'Detect dominant colors in images using AI analysis',
	action: 'Detect color in image',
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
				operation: [OperationType.DETECT_COLOR],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'The URL of the image to analyze for color detection',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_COLOR],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.DETECT_COLOR}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
				},
			},
		},
	},
];
