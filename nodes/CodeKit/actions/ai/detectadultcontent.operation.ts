import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Adult Content',
	value: OperationType.DETECT_ADULT_CONTENT,
	description: 'Detect adult content in images using AI analysis',
	action: 'Detect adult content in image',
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
				operation: [OperationType.DETECT_ADULT_CONTENT],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'The URL of the image to analyze for adult content',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_ADULT_CONTENT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.DETECT_ADULT_CONTENT}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
				},
			},
		},
	},
];
