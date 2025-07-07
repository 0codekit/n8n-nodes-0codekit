import type { INodeProperties } from 'n8n-workflow';
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
				resource: ['dateandtime'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'date',
			},
		},
	},
	{
		displayName: 'Unix Timestamp',
		name: 'unixTimestamp',
		type: 'number',
		description: 'Unix timestamp to get the calender week from',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: ['dateandtime'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'unixTimestamp',
			},
		},
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year in the calendar',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: ['dateandtime'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'year',
			},
		},
	},
	{
		displayName: 'Week Number',
		name: 'weekNumber',
		type: 'number',
		description: 'Week number to get the calender week from',
		displayOptions: {
			show: {
				operation: [OperationType.CALENDAR_WEEK],
				resource: ['dateandtime'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'weekNumber',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.CALENDAR_WEEK,
		routing: {
			send: {
				type: 'body',
				property: 'operation',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'body',
						},
					},
				],
			},
			request: {
				method: 'POST',
				url: '/dateandtime/calendarweek',
			},
		},
	},
];
