import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Picture Text Recognition',
	value: OperationType.PICTURE_TEXT_RECONITION,
	description: 'Detects the text in a picture using Optical Character Recognition AI',
	action: 'Picture text recognition',
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
				operation: [OperationType.PICTURE_TEXT_RECONITION],
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
				operation: [OperationType.PICTURE_TEXT_RECONITION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.PICTURE_TEXT_RECONITION}`,
				body: {
					imageUrl: '={{$parameter.imageUrl}}',
				},
			},
		},
	},
];
