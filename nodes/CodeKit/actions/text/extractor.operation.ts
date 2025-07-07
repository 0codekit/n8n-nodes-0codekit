import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
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
				resource: [ResourceType.TEXT],
			},
		},
		default: '',
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
				resource: [ResourceType.TEXT],
			},
		},
		default: '',
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
				resource: [ResourceType.TEXT],
			},
		},
		default: '',
	},
	{
		displayName: 'Greedy',
		name: 'greedy',
		type: 'boolean',
		description: 'Whether to extract the first or last match',
		displayOptions: {
			show: {
				operation: [OperationType.EXTRACTOR],
				resource: [ResourceType.TEXT],
			},
		},
		default: false,
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.EXTRACTOR],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.TEXT}/${OperationType.EXTRACTOR}`,
				body: {
					start: '={{$parameter.start}}',
					end: '={{$parameter.end}}',
					body: '={{$parameter.body}}',
					greedy: '={{$parameter.greedy}}',
				},
			},
		},
	},
];
