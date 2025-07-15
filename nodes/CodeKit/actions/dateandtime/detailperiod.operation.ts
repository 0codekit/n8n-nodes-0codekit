import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get Detail Period',
	value: OperationType.DETAIL_PERIOD,
	description: 'Get detailed period information for a date range',
	action: 'Get Detail Period',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		description: 'Start date for the detail period',
		displayOptions: {
			show: {
				operation: [OperationType.DETAIL_PERIOD],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023-01-01',
	},
	{
		displayName: 'Duration (Days)',
		name: 'duration',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 365,
		},
		description: 'Number of days for the detail period',
		displayOptions: {
			show: {
				operation: [OperationType.DETAIL_PERIOD],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 0,
		placeholder: 'e.g. 30',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.DETAIL_PERIOD],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.DETAIL_PERIOD}`,
				body: {
					startDate: '={{$parameter.startDate}}',
					duration: '={{$parameter.duration}}',
				},
			},
		},
	},
];
