import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract JSON Values',
	value: OperationType.ADVANCED_SWITCH,
	description: 'Extract values from JSON object using specified keys',
	action: 'Extract values from JSON object using specified keys',
};

export const description: INodeProperties[] = [
	{
		displayName: 'JSON Data',
		name: 'jsonObject',
		type: 'json',
		required: true,
		default: '{}',
		placeholder: '{"name": "John", "age": 30, "city": "New York"}',
		description: 'JSON object to extract values from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.ADVANCED_SWITCH],
			},
		},
	},
	{
		displayName: 'Keys to Extract',
		name: 'keys',
		type: 'json',
		default: '[]',
		placeholder: '["name", "age"]',
		description: 'Array of keys to extract from the JSON object',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.ADVANCED_SWITCH],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.ADVANCED_SWITCH],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/advancedswitch`,
				body: {
					jsonObject: '={{$parameter.jsonObject}}',
					keys: '={{$parameter.keys}}',
				},
			},
		},
	},
];
