import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate Python Code',
	value: OperationType.GENERATE_PYTHON_CODE,
	description: 'Generates Python code from a prompt',
	action: 'Generate Python code',
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
				operation: [OperationType.GENERATE_PYTHON_CODE],
			},
		},
		default: '',
		description: 'The prompt to generate Python code for',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.GENERATE_PYTHON_CODE}`,
				body: {
					prompt: '={{$value.prompt}}',
				},
			},
		},
	},
];
