import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate Image',
	value: OperationType.GENERATE_IMAGE,
	description: 'Generate images from text prompts using AI',
	action: 'Generate image from text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		placeholder: 'e.g. A beautiful sunset over the mountains',
		default: '',
		description: 'The text prompt describing the image to generate',
	},
	{
		displayName: 'Number of Results',
		name: 'n',
		type: 'number',
		required: true,
		typeOptions: {
			minValue: 1,
			maxValue: 10,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		default: 1,
		description: 'The number of images to generate (1-10)',
	},
	{
		displayName: 'Resolution',
		name: 'size',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		options: [
			{
				name: '256x256',
				value: '256x256',
			},
			{
				name: '512x512',
				value: '512x512',
			},
			{
				name: '1024x1024',
				value: '1024x1024',
			},
		],
		default: '512x512',
		description: 'The resolution/size of the generated image',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_IMAGE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_IMAGE}`,
				body: {
					prompt: '={{$parameter.prompt}}',
					n: '={{$parameter.n}}',
					size: '={{$parameter.size}}',
				},
			},
		},
	},
];
