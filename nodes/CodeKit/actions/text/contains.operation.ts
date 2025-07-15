import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Contains Check',
	value: OperationType.CONTAINS,
	description: 'Check if text contains specific words or patterns',
	action: 'Check text contains',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text to Search',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.CONTAINS],
			},
		},
		default: '',
		placeholder: 'The quick brown fox jumps over the lazy dog',
		description: 'The text to search within',
	},
	{
		displayName: 'Search Pattern',
		name: 'searchString',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.CONTAINS],
			},
		},
		default: '',
		placeholder: 'fox',
		description: 'The word or pattern to search for',
	},
	{
		displayName: 'Case Sensitive',
		name: 'caseSensitive',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.CONTAINS],
			},
		},
		default: true,
		description: 'Whether the search should be case sensitive',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.CONTAINS],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.TEXT}/${OperationType.CONTAINS}`,
				body: {
					text: '={{$parameter.text}}',
					searchString: '={{$parameter.searchString}}',
					caseSensitive: '={{$parameter.caseSensitive}}',
				},
			},
		},
	},
];
