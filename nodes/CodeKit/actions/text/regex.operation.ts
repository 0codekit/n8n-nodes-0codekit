import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Regular Expression',
	value: OperationType.REGEX,
	description: 'Process text using regular expressions',
	action: 'Process with regex',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.REGEX],
			},
		},
		default: '',
		description: 'The text to evaluate',
	},
	{
		displayName: 'Expression',
		name: 'expression',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.REGEX],
			},
		},
		default: '',
		description: 'The regex pattern to match against',
		placeholder: '[a-zA-Z0-9]+',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.REGEX],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.TEXT}/${OperationType.REGEX}`,
				body: {
					text: '={{$parameter.text}}',
					expression: '={{$parameter.expression}}',
				},
			},
		},
	},
];
