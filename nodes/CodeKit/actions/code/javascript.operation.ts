import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';
import { createDependenciesUIProperty, setDependencies } from './shared';

export const option = {
	name: 'Javascript',
	value: OperationType.JAVASCRIPT,
	description:
		'This endpoint runs JavaScript code in a Linux sandbox using the Bun JavaScript runtime. You can return data from the code using a top-level return statement or by setting the global result variable. Logging something to the console has no effect. To import dependencies, use the require function. All dependencies will be automatically downloaded and installed for you, with the exception of native system dependencies. There is a time limit of 180s and a memory limit of 512MB applied to your code, which also includes the dependency download process. One execution of this module costs 50 credits.',
	action: 'Run javascript code',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.JAVASCRIPT],
				resource: [ResourceType.CODE],
			},
		},
		default: '',
		typeOptions: {
			rows: 4,
		},
		placeholder: 'const _ = require("lodash"); return {data: _.chunk(["a", "b", "c", "d"], 2)};',
		description: 'The JavaScript code that will be executed',
	},
	createDependenciesUIProperty([OperationType.JAVASCRIPT]),
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
				operation: [OperationType.JAVASCRIPT],
			},
		},
		default: '',
		routing: {
			send: {
				preSend: [setDependencies],
			},
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.JAVASCRIPT}`,
				body: {
					code: '={{$parameter.code}}',
				},
			},
		},
	},
];
