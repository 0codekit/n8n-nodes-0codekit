import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Picture Object Recognition',
	value: OperationType.PICTURE_OBJECT_RECOGNITION,
	description: 'Detects objects in a picture',
	action: 'Picture object recognition',
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
		placeholder: 'https://example.com/image.jpg',
		description: 'The URL of the image to analyze',
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
