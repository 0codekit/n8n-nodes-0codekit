import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate Javascript Code',
	value: OperationType.GENERATE_JAVASCRIPT_CODE,
	description: 'Generate javascript code based on provided prompt',
	action: 'Generate javascript code',
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
				operation: [OperationType.GENERATE_JAVASCRIPT_CODE],
			},
		},
		default: '',
		description: 'The prompt to generate the Code',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_JAVASCRIPT_CODE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_JAVASCRIPT_CODE}`,
				body: {
					prompt: '={{$parameter.prompt}}',
				},
			},
		},
	},
];
