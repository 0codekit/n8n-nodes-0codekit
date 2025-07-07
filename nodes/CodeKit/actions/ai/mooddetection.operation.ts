import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Mood Detection',
	value: OperationType.MOOD_DETECTION,
	description: 'Detect the mood from text',
	action: 'Mood detection',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.MOOD_DETECTION],
			},
		},
		default: '',
		description: 'Text you want to analyse',
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
