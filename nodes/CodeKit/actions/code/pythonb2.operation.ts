import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Python B2',
	value: OperationType.PYTHON_B2,
	description: 'Run Python B2 via API',
	action: 'Run python b2 code',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				operation: [OperationType.PYTHON_B2],
				resource: [ResourceType.CODE],
			},
		},
		default: '',
		description: 'Your python code',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
				operation: [OperationType.PYTHON_B2],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.PYTHON_B2}`,
				body: {
					code: '={{$parameter.code}}',
				},
			},
		},
	},
];
