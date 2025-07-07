import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Picture',
	value: OperationType.PICTURE,
	description: 'Generate a random Picture',
	action: 'Generate a random picture',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.PICTURE],
			},
		},
		default: 400,
		description: 'Width of the image in pixels',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.PICTURE}`,
				body: {
					width: '={{$value.width}}',
				},
			},
		},
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.PICTURE],
			},
		},
		default: 400,
		description: 'Height of the image in pixels',
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		options: [
			{ name: 'Abstract', value: 'abstract' },
			{ name: 'Animals', value: 'animals' },
			{ name: 'Business', value: 'business' },
			{ name: 'Cats', value: 'cats' },
			{ name: 'City', value: 'city' },
			{ name: 'Food', value: 'food' },
			{ name: 'Nature', value: 'nature' },
			{ name: 'People', value: 'people' },
			{ name: 'Sports', value: 'sports' },
			{ name: 'Technology', value: 'technics' },
			{ name: 'Transport', value: 'transport' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.PICTURE],
			},
		},
		default: 'nature',
		description: 'Category of the image',
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.PICTURE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.GENERATE/OperationType.PICTURE,
				body: {
					
				},
			},
		},
	},
];