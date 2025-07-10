import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Entity Detection',
	value: OperationType.ENTITY_DETECTION,
	action: 'Detects entities in a text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.ENTITY_DETECTION],
			},
		},
		default: '',
		placeholder: 'Text to analyze',
		description: 'Text for entity detection',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.ENTITY_DETECTION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.ENTITY_DETECTION}`,
				body: {
					text: '={{$parameter.text}}',
				},
			},
		},
	},
];
