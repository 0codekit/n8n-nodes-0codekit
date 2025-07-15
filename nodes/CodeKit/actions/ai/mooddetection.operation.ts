import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Mood',
	value: OperationType.MOOD_DETECTION,
	description: 'Analyze text content to detect emotional mood and sentiment',
	action: 'Detect mood from text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Content',
		name: 'text',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.MOOD_DETECTION],
			},
		},
		default: '',
		placeholder: 'e.g. I am feeling great today! The weather is wonderful.',
		description: 'The text content to analyze for mood and sentiment detection',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.MOOD_DETECTION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.MOOD_DETECTION}`,
				body: {
					text: '={{$parameter.text}}',
				},
			},
		},
	},
];
