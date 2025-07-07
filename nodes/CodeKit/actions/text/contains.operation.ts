import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Contains',
	value: OperationType.CONTAINS,
	description: 'Check if a string contains another string',
	action: 'Contains',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
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
		description: 'The text to search in',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.TEXT}/${OperationType.CONTAINS}`,
				body: {
					text: '={{$value.text}}',
				},
			},
		},
	},
	{
		displayName: 'Search String',
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
		description: 'The string to search for',
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
];
