import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get Calendar Week',
	value: OperationType.CALENDAR_WEEK,
	description: 'Get the calendar week number for a date',
	action: 'Get Calendar Week',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		description: 'Date to get calendar week for',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023-01-01',
	},
	{
		displayName: 'Unix Timestamp',
		name: 'unixTimestamp',
		type: 'number',
		description: 'Unix timestamp to get calendar week for',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 0,
		placeholder: 'e.g. 1672531200',
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year to get calendar week for',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023',
	},
	{
		displayName: 'Week Number',
		name: 'weekNumber',
		type: 'number',
		description: 'Week number to get calendar week for',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 0,
		placeholder: 'e.g. 25',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.CALENDAR_WEEK}`,
				body: {
					date: '={{$parameter.date}}',
					unixTimestamp: '={{$parameter.unixTimestamp}}',
					year: '={{$parameter.year}}',
					weekNumber: '={{$parameter.weekNumber}}',
				},
			},
		},
	},
];
