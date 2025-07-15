import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Summarize Text',
	value: OperationType.TOO_LONG_TO_READ,
	description: 'Create concise summaries of long text content using AI',
	action: 'Summarize long text content',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Content',
		name: 'prompt',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TOO_LONG_TO_READ],
			},
		},
		placeholder:
			'e.g. This is a long article about artificial intelligence and its applications...',
		default: '',
		description: 'The long text content to summarize and analyze',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TOO_LONG_TO_READ],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.TOO_LONG_TO_READ}`,
				body: {
					prompt: '={{$parameter.prompt}}',
				},
			},
		},
	},
];
