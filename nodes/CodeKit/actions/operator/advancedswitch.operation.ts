import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Advanced Switch',
	value: OperatorOperation.ADVANCED_SWITCH,
	description: 'Get JSON values from keys',
	action: 'Get JSON values from keys',
};

export const description: INodeProperties[] = [
	{
		displayName: 'JSON Object',
		name: 'jsonObject',
		type: 'json',
		required: true,
		default: '{}',
		description: 'JSON object to extract values from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.ADVANCED_SWITCH],
			},
		}',
					keys: '={{$value.keys}}',
				},
			},
		},
	},
	{
		displayName: 'Keys',
		name: 'keys',
		type: 'json',
		default: '[]',
		description: 'Array of keys to extract from the JSON object',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.ADVANCED_SWITCH],
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.ADVANCED_SWITCH],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.OPERATOR/OperatorOperation.ADVANCED_SWITCH,
				body: {
					
				},
			},
		},
	},
];