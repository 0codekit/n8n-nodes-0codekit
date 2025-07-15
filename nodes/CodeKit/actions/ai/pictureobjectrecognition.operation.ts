import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Recognize Objects in Image',
	value: OperationType.PICTURE_OBJECT_RECOGNITION,
	description: 'Detect and identify objects in images using AI analysis',
	action: 'Recognize objects in image',
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
				operation: [OperationType.PICTURE_OBJECT_RECOGNITION],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'The URL of the image to analyze for object recognition',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.PICTURE_OBJECT_RECOGNITION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.PICTURE_OBJECT_RECOGNITION}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
				},
			},
		},
	},
];
