import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Execute Python Code',
	value: OperationType.PYTHON,
	action: 'Execute Python code',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		typeOptions: {
			rows: 10,
		},
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
				operation: [OperationType.PYTHON],
			},
		},
		default: '',
		description: 'The Python code to execute',
		placeholder: 'print("Hello World")',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
				operation: [OperationType.PYTHON],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.PYTHON}`,
				body: {
					code: '={{$parameter.code}}',
				},
			},
		},
	},
];
