import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Switch Time Zone',
	value: OperationType.SWITCH_TIME_ZONE,
	description: 'Convert date and time between different time zones',
	action: 'Switch Time Zone',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date/Time',
		name: 'dateTime',
		type: 'string',
		required: true,
		description: 'Date and time to convert',
		displayOptions: {
			show: {
				operation: [OperationType.SWITCH_TIME_ZONE],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023-01-01 12:00:00',
	},
	{
		displayName: 'From Time Zone',
		name: 'fromTimeZone',
		type: 'string',
		required: true,
		description: 'Source time zone',
		displayOptions: {
			show: {
				operation: [OperationType.SWITCH_TIME_ZONE],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 'UTC',
		placeholder: 'e.g. UTC, America/New_York, Europe/Berlin',
	},
	{
		displayName: 'To Time Zone',
		name: 'toTimeZone',
		type: 'string',
		required: true,
		description: 'Target time zone',
		displayOptions: {
			show: {
				operation: [OperationType.SWITCH_TIME_ZONE],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 'UTC',
		placeholder: 'e.g. UTC, America/New_York, Europe/Berlin',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.SWITCH_TIME_ZONE],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.SWITCH_TIME_ZONE}`,
				body: {
					dateTime: '={{$parameter.dateTime}}',
					fromTimeZone: '={{$parameter.fromTimeZone}}',
					toTimeZone: '={{$parameter.toTimeZone}}',
				},
			},
		},
	},
];
