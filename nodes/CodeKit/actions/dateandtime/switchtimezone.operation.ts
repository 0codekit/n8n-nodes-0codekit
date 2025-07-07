import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Switch Time Zone',
	value: OperationType.SWITCH_TIME_ZONE,
	description: 'Switch the time zone of a date',
	action: 'Switch time zone',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.SWITCH_TIME_ZONE,
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
				url: '/dateandtime/switchtimezone',
			},
		},
	},
];
