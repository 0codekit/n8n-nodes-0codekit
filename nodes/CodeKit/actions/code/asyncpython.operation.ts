import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';
import {
	createDependenciesUIProperty,
	createRequirementsUIProperty,
	setRequirementsAndDependencies,
} from './shared';

export const option = {
	name: 'ASYNC Python Script Advanced (Complex Script)',
	value: OperationType.ASYNC_PYTHON,
	description:
		'This endpoint runs Python code in a Linux sandbox using the CPython interpreter. In contrast to the normal Python endpoint, this endpoint returns immediately, and the result of your code is sent to a webhook. You can return data using the print statement. To import dependencies, first add all the dependencies to the requirements array, and then import them using the common import statement. All dependencies will be automatically downloaded and installed for you, with the exception of native system dependencies. There is a time limit of 30 minutes and a memory limit of 512MB applied to your code, which also includes the dependency download process. The execution of this module costs 50 credits for every started 3 minutes of execution, so at least 50 and at most 500 credits.',
	action: 'Runs async python via api',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				operation: [OperationType.ASYNC_PYTHON],
				resource: [ResourceType.CODE],
			},
		},
		default: '',
		placeholder: `import requests\nimport json\ndef main():\n\t# Your code here\n\tdata = {"message": "Hello, World!"}\n\tprint(json.dumps(data))  # Print the result as JSON\nmain()`,
		description:
			"A string of the code which should be executed asynchronously. Please notice that this endpoint unlike the other code execution endpoint does require import statements in the code and does not require a 'result' variable. In order to visualize data in the response just use a print statement, you can parse the printed JSON output at the receiving webhook.",
	},
	createRequirementsUIProperty([OperationType.ASYNC_PYTHON]),
	createDependenciesUIProperty([OperationType.ASYNC_PYTHON]),
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
			send: {
				preSend: [setRequirementsAndDependencies],
			},
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.ASYNC_PYTHON}`,
				body: {
					code: '={{$parameter.code}}',
					sendTo: '={{$parameter.sendTo}}',
				},
			},
		},
	},
];
