import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Language',
	value: OperationType.LANGUAGE_DETECTION,
	description: 'Detect the language of text content using AI analysis',
	action: 'Detect language of text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Content',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.LANGUAGE_DETECTION],
			},
		},
		default: '',
		placeholder: 'e.g. Hello, how are you today?',
		description: 'The text content to analyze for language detection',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.LANGUAGE_DETECTION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.LANGUAGE_DETECTION}`,
				body: {
					text: '={{$parameter.text}}',
				},
			},
		},
	},
];
