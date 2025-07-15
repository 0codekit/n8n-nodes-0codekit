import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate JavaScript Code',
	value: OperationType.GENERATE_JAVASCRIPT_CODE,
	description: 'Generate JavaScript code based on text prompts using AI',
	action: 'Generate JavaScript code from prompt',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Code Prompt',
		name: 'prompt',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_JAVASCRIPT_CODE],
			},
		},
		default: '',
		placeholder: 'e.g. Create a function that sorts an array of numbers in ascending order',
		description: 'The text prompt describing the JavaScript code to generate',
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
