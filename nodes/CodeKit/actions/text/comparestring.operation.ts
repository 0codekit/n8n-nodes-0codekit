import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Compare String',
	value: OperationType.COMPARE_STRING,
	description: 'Compare two strings',
	action: 'Compare string',
};

export const description: INodeProperties[] = [
	{
		displayName: 'First String',
		name: 'string1',
		type: 'string',
		description: 'First string to compare',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.COMPARE_STRING],
				resource: ['text'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'string1',
			},
		},
	},
	{
		displayName: 'Second String',
		name: 'string2',
		type: 'string',
		description: 'Second string to compare',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.COMPARE_STRING],
				resource: ['text'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'string2',
			},
		},
	},
	{
		displayName: 'Algorithm',
		name: 'algorithm',
		type: 'string',
		description: 'Algorithm to use to compare the strings',
		displayOptions: {
			show: {
				operation: [OperationType.COMPARE_STRING],
				resource: ['text'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'algorithm',
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: ['text'],
				operation: [OperationType.COMPARE_STRING],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /'text'/OperationType.COMPARE_STRING,
				body: {
					
				},
			},
		},
	},
];