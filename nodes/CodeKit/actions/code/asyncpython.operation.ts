import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'ASYNC Python Script Advanced (Complex Script)',
	value: OperationType.ASYNC_PYTHON,
	description: 'Run async python via API',
	action: 'Runs async python via api',
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
				operation: [OperationType.ASYNC_PYTHON],
				resource: [ResourceType.CODE],
			},
		},
		default: '',
		description:
			"A string of the code which should be executed asynchronously. Please notice that this endpoint unlike the other code execution endpoint does require import statements in the code and does not require a 'result' variable. In order to visualize data in the response just use a print statement, you can parse the printed JSON output at the receiving webhook.",
	},
	{
		displayName: 'Requirements',
		name: 'requirementsUI',
		placeholder: 'Add Dependency',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description:
			"An array with the dependencies of the code. Eg. ['selenium', 'requests', 'numpy'].",
		options: [
			{
				name: 'requirementsValues',
				displayName: 'Requirements',
				values: [
					{
						displayName: 'Dependency Name',
						name: 'name',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [OperationType.ASYNC_PYTHON],
				resource: [ResourceType.CODE],
			},
		},
	},
	{
		displayName: 'Send To',
		name: 'sendTo',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.ASYNC_PYTHON],
				resource: [ResourceType.CODE],
			},
		},
		default: '',
		description: 'Webhook URL where the result will be sent to after finishing the execution',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
				operation: [OperationType.ASYNC_PYTHON],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.ASYNC_PYTHON}`,
				body: {
					code: '={{$parameter.code}}',
					requirements:
						'={{ $parameter.requirementsUI?.requirementsValues ? $parameter.requirementsUI.requirementsValues.map(item => item.name) : [] }}',
					sendTo: '={{$parameter.sendTo}}',
				},
			},
		},
	},
];
