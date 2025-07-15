import {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';
import { mapArrayOfObjectsToStringArray } from '../../helpers/utils';
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
		typeOptions: {
			rows: 10,
		},
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
		displayName: 'Keyword to Search',
		name: 'keyword',
		type: 'string',
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
		displayName: 'Multiple Keywords',
		name: 'keywordsUI',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.CONTAINS],
			},
		},
		default: [],
		options: [
			{
				name: 'keywords',
				displayName: 'Keywords',
				values: [
					{
						displayName: 'Keyword',
						name: 'searchString',
						type: 'string',
						default: '',
						placeholder: 'fox',
						description: 'Additional words or patterns to search for',
					},
				],
			},
		],
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
		default: false,
		description: 'Whether the search should be case sensitive',
	},
	{
		displayName: 'Only Complete Words',
		name: 'onlyCompleteWords',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.CONTAINS],
			},
		},
		default: false,
		description: 'Whether to match only complete words',
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
			send: {
				preSend: [],
			},
			request: {
				method: 'POST',
				url: `/${ResourceType.TEXT}/${OperationType.CONTAINS}`,
				body: {
					text: '={{$parameter.text}}',
					keyword: '={{$parameter.keyword}}',
					options: {
						caseSensitive: '={{$parameter.caseSensitive}}',
						onlyCompleteWords: '={{$parameter.onlyCompleteWords}}',
					},
				},
			},
		},
	},
];

export async function setKeywordList(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const keywordsUI = this.getNodeParameter('keywordsUI') as IDataObject;
	const keywordsValues = keywordsUI.keywordsValues as IDataObject[];

	const { body } = requestOptions;
	body.keywordList = mapArrayOfObjectsToStringArray(keywordsValues);
	return requestOptions;
}
