import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Traffic Light Rate Limiting',
	value: OperationType.TRAFFIC_LIGHT,
	description: 'Check rate limit status for identifier',
	action: 'Check rate limit status for identifier',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Rate Limit Identifier',
		name: 'identifier',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'api-user-123',
		description: 'Unique identifier for the rate limit check',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.TRAFFIC_LIGHT],
			},
		},
	},
	{
		displayName: 'Request Limit',
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
				operation: [OperationType.TRAFFIC_LIGHT],
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
				operation: [OperationType.TRAFFIC_LIGHT],
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
				operation: [OperationType.TRAFFIC_LIGHT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/trafficlight`,
				body: {
					identifier: '={{$parameter.identifier}}',
					limit: '={{$parameter.limit}}',
					timeWindow: '={{$parameter.timeWindow}}',
				},
			},
		},
	},
];
