import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extractor',
	value: OperationType.EXTRACTOR,
	description: 'Extract data from a string',
	action: 'Extractor',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Start String',
		name: 'start',
		type: 'string',
		required: true,
		description: 'String to start the extraction',
		displayOptions: {
			show: {
				operation: [OperationType.EXTRACTOR],
				resource: ['text'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'start',
			},
		},
	},
	{
		displayName: 'End String',
		name: 'end',
		type: 'string',
		required: true,
		description: 'String to end the extraction',
		displayOptions: {
			show: {
				operation: [OperationType.EXTRACTOR],
				resource: ['text'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'end',
			},
		},
	},
	{
		displayName: 'Base String',
		name: 'body',
		type: 'string',
		required: true,
		description: 'String to extract from',
		displayOptions: {
			show: {
				operation: [OperationType.EXTRACTOR],
				resource: ['text'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'body',
			},
		},
	},
	{
		displayName: 'Greedy',
		name: 'greedy',
		type: 'boolean',
		description: 'Whether to extract the first or last match',
		displayOptions: {
			show: {
				operation: [OperationType.EXTRACTOR],
				resource: ['text'],
			},
		},
		default: false,
		routing: {
			send: {
				type: 'body',
				property: 'greedy',
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: ['text'],
				operation: [OperationType.EXTRACTOR],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /'text'/OperationType.EXTRACTOR,
				body: {
					
				},
			},
		},
	},
];