import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Traffic Light',
	value: OperatorOperation.TRAFFIC_LIGHT,
	description: 'Check rate limit',
	action: 'Check rate limit',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		required: true,
		default: '',
		description: 'Unique identifier for the rate limit check',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.TRAFFIC_LIGHT],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/trafficlight',
				body: {
					identifier: '={{$value.identifier}}',
					limit: '={{$value.limit}}',
					timeWindow: '={{$value.timeWindow}}',
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.TRAFFIC_LIGHT],
			},
		},
	},
	{
		displayName: 'Time Window (Seconds)',
		name: 'timeWindow',
		type: 'number',
		default: 60,
		description: 'Time window in seconds for the rate limit',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.TRAFFIC_LIGHT],
			},
		},
	},
];
