import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Fuzzy Text Matcher',
	value: OperationType.FUZZY_MATCH,
	description:
		'Find the best match for your text from a list of options using AI. Even if the wording is different, the AI will understand and return the closest match.',
	action: 'Ai fuzzy text matcher',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Query String',
		name: 'queryString',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.FUZZY_MATCH],
			},
		},
		default: '',
		description:
			'The main string you want to match against the target list. Typically, this is the name or entity you are searching for.',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.FUZZY_MATCH}`,
				body: {
					queryString: '={{$value.queryString}}',
				},
			},
		},
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.FUZZY_MATCH],
			},
		},
		default: '',
		description:
			'A short description of the type of data being matched. This helps provide additional clarity for the AI in determining the best match.',
	},
	{
		displayName: 'Target List',
		name: 'targetListUI',
		placeholder: 'Add Additional Targets',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description:
			'The list of potential matches. Each entry in this list represents a possible candidate for matching with the query string.',
		options: [
			{
				name: 'targetList',
				displayName: 'Target List',
				values: [
					{
						displayName: 'Entry',
						name: 'entry',
						type: 'string',
						description: 'A possible entry for match with the query string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.FUZZY_MATCH],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'optionsListUI',
		type: 'fixedCollection',
		placeholder: 'Options',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		options: [
			{
				name: 'options',
				displayName: 'Option List',
				values: [
					{
						displayName: 'Max Results',
						name: 'maxResults',
						type: 'number',
						description: 'The maximum number of matches to return. Defaults to 1 if not specified.',
						default: 1,
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.FUZZY_MATCH],
			},
		},
	},
];
