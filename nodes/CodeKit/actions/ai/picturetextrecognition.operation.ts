import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Text From Image',
	value: OperationType.PICTURE_TEXT_RECOGNITION,
	description: 'Extract text from images using optical character recognition AI',
	action: 'Extract text from image using OCR',
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
				operation: [OperationType.PICTURE_TEXT_RECOGNITION],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'The URL of the image to analyze for text extraction',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.PICTURE_TEXT_RECOGNITION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.PICTURE_TEXT_RECOGNITION}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
				},
			},
		},
	},
];
