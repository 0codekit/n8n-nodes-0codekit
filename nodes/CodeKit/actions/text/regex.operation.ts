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
		displayName: 'Pattern',
		name: 'pattern',
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
		displayName: 'Flags',
		name: 'flags',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.REGEX],
			},
		},
		default: 'g',
		description: 'Regex flags (e.g., g, i, m)',
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
					pattern: '={{$parameter.pattern}}',
					flags: '={{$parameter.flags}}',
				},
			},
		},
	},
];
