import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Javascript',
	value: OperationType.JAVASCRIPT,
	description: 'Run Javascript via API',
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
		description: 'Your javascript code',
	},
	{
		displayName: 'Dependencies',
		name: 'dependencies',
		type: 'collection',
		placeholder: 'Add Dependency',
		default: {},
		displayOptions: {
			show: {
				operation: [OperationType.JAVASCRIPT],
				resource: [ResourceType.CODE],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the dependency, e.g. "lodash"',
			},
			{
				displayName: 'Version',
				name: 'version',
				type: 'string',
				default: '',
				description: 'Version of the dependency, e.g. "4.17.21"',
			},
		],
		description:
			'The system dependencies your JavaScript code requires. These will be installed using apk, the Alpine Package manager.',
	},
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
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.JAVASCRIPT}`,
				body: {
					code: '={{$parameter.code}}',
					dependencies: '={{$parameter.dependencies}}',
				},
			},
		},
	},
];
