import type { INodeProperties } from 'n8n-workflow';
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
				resource: ['code'],
			},
		},
		default: '',
		description: 'Your javascript code',
		routing: {
			send: {
				type: 'body',
				property: 'code',
			},
		},
	},
];
