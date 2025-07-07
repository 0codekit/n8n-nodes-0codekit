import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Too Long To Read',
	value: OperationType.TOO_LONG_TO_READ,
	description: 'Create a summary of a text',
	action: 'Too long to read',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'prompt',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TOO_LONG_TO_READ],
			},
		},
		default: '',
		description: 'The text you want to analyse',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.TOO_LONG_TO_READ}`,
				body: {
					prompt: '={{$value.prompt}}',
				},
			},
		},
	},
];
