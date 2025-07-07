import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate Image',
	value: OperationType.GENERATE_IMAGE,
	description: 'Generates an image from text using AI',
	action: 'Generate image',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		default: '',
		description: 'The prompt to generate the image',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_IMAGE}`,
				body: {
					prompt: '={{$value.prompt}}',
				},
			},
		},
	},
	{
		displayName: 'Number of Results',
		name: 'n',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		default: 1,
		description: 'The number of results to generate',
	},
	{
		displayName: 'Resolution',
		name: 'size',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		default: '512x512',
		description:
			'The resolution of the image, only works for "256x256", "512x512", and "1024x1024"',
	},
];
