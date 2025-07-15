import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';
import {
	createDependenciesUIProperty,
	createRequirementsUIProperty,
	setRequirementsAndDependencies,
} from './shared';

export const option = {
	name: 'Execute Python Code',
	value: OperationType.PYTHON,
	description:
		'This endpoint runs Python code in a Linux sandbox using the CPython interpreter. You can return data from the code by setting the global result variable. Logging something to the console has no effect. To import dependencies, first add all dependencies to the requirements array, and then import them using the common import statement. All dependencies will be automatically downloaded and installed for you, with the exception of native system dependencies. There is a time limit of 180s and a memory limit of 512MB applied to your code, which also includes the dependency download process. One execution of this module costs 50 credits.',
	action: 'Executes Python code in a sandbox environment',
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
		placeholder:
			'import requests\nimport json\ndef main():\n\t# Your code here\n\tdata = {"message": "Hello, World!"}\n\tprint(json.dumps(data))  # Print the result as JSON\nmain()',
	},
	createRequirementsUIProperty([OperationType.PYTHON]),
	createDependenciesUIProperty([OperationType.PYTHON]),
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
			send: {
				preSend: [setRequirementsAndDependencies],
			},
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
