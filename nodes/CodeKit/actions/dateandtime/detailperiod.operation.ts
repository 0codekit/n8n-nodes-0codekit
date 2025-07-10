import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detail Period',
	value: OperationType.DETAIL_PERIOD,
	description: 'Get the detail period of a date',
	action: 'Detail period',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		description: 'Start date of the detail period',
		displayOptions: {
			show: {
				operation: [OperationType.DETAIL_PERIOD],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 365,
		},
		description: 'Duration of days for which the detail period is retrieved',
		displayOptions: {
			show: {
				operation: [OperationType.DETAIL_PERIOD],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 0,
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
