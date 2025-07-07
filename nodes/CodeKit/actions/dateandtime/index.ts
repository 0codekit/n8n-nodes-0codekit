import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as calendarWeekDescription,
	option as calendarWeekOption,
} from './calendarweek.operation';
import {
	description as detailPeriodDescription,
	option as detailPeriodOption,
} from './detailperiod.operation';
import { description as holidaysDescription, option as holidaysOption } from './holidays.operation';
import {
	description as isWeekendDescription,
	option as isWeekendOption,
} from './isweekend.operation';
import { description as monthDescription, option as monthOption } from './month.operation';
import {
	description as switchTimeZoneDescription,
	option as switchTimeZoneOption,
} from './switchtimezone.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		options: [
			calendarWeekOption,
			detailPeriodOption,
			holidaysOption,
			isWeekendOption,
			monthOption,
			switchTimeZoneOption,
		],
		default: '',
	},
	...calendarWeekDescription,
	...detailPeriodDescription,
	...holidaysDescription,
	...isWeekendDescription,
	...monthDescription,
	...switchTimeZoneDescription,
];
