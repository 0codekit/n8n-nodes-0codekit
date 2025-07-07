import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Entity Detection',
	value: OperationType.ENTITY_DETECTION,
	description: 'Detects entities in a text with natural language processing AI',
	action: 'Entity detection',
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
				operation: [OperationType.ENTITY_DETECTION],
			},
		},
		default: '',
		placeholder: 'Text to analyze',
		description: 'Text for entity detection',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.ENTITY_DETECTION}`,
				body: {
					text: '={{$value.text}}',
				},
			},
		},
	},
];
