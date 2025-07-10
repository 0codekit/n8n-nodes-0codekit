import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Calender Week',
	value: OperationType.CALENDAR_WEEK,
	description: 'Get the calender week of a date',
	action: 'Calender week',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		description: 'Date in the calendar',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
	},
	{
		displayName: 'Unix Timestamp',
		name: 'unixTimestamp',
		type: 'number',
		description: 'Unix timestamp to get the calender week from',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 0,
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year in the calendar',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
	},
	{
		displayName: 'Week Number',
		name: 'weekNumber',
		type: 'number',
		description: 'Week number to get the calender week from',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
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
