import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Entities',
	value: OperationType.ENTITY_DETECTION,
	description: 'Extract entities like names, locations, and organizations from text',
	action: 'Extract entities from text',
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
				operation: [OperationType.ENTITY_DETECTION],
			},
		},
		default: '',
		placeholder: 'e.g. John Smith from New York works at OpenAI',
		description: 'The text content to analyze for entity extraction',
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
