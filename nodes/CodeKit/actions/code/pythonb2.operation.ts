import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';
import {
	createDependenciesUIProperty,
	createRequirementsUIProperty,
	setRequirementsAndDependencies,
} from './shared';

export const option = {
	name: 'Python B2',
	value: OperationType.PYTHON_B2,
	description:
		'This endpoint runs Python code in a Linux sandbox using the CPython interpreter. You can return data from the code by setting the global result variable. Logging something to the console has no effect. To import dependencies, first add all dependencies to the requirements array, and then import them using the common import statement. All dependencies will be automatically downloaded and installed for you, with the exception of native system dependencies. There is a time limit of 180s and a memory limit of 512MB applied to your code, which also includes the dependency download process. One execution of this module costs 50 credits.',
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
	createRequirementsUIProperty([OperationType.PYTHON_B2]),
	createDependenciesUIProperty([OperationType.PYTHON_B2]),
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
			send: {
				preSend: [setRequirementsAndDependencies],
			},
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
