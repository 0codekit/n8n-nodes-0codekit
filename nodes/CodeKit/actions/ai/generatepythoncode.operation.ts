import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate Python Code',
	value: OperationType.GENERATE_PYTHON_CODE,
	description: 'Generate Python code based on text prompts using AI',
	action: 'Generate Python code from prompt',
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
				operation: [OperationType.GENERATE_PYTHON_CODE],
			},
		},
		default: '',
		placeholder: 'e.g. Create a function that calculates the factorial of a number',
		description: 'The text prompt describing the Python code to generate',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.GENERATE_PYTHON_CODE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_PYTHON_CODE}`,
				body: {
					prompt: '={{$parameter.prompt}}',
				},
			},
		},
	},
];
