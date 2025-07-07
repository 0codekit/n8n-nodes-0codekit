import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Geodistance Version 2',
	value: OperationType.GEODISTANCE_V2,
	description: 'Calculates the geodistance between two addresses or geopoints',
	action: 'Geodistance calculator',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Starting Location',
		name: 'startPoint',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.GEODISTANCE_V2],
				resource: [ResourceType.CALCULATE],
			},
		},
		default: 'Berlin',
		routing: {
			send: {
				type: 'body',
				property: 'startPoint',
			},
		},
	},
	{
		displayName: 'Ending Location',
		name: 'endPoint',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.GEODISTANCE_V2],
				resource: [ResourceType.CALCULATE],
			},
		},
		default: 'Flensburg',
		routing: {
			send: {
				type: 'body',
				property: 'endPoint',
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CALCULATE],
				operation: [OperationType.GEODISTANCE_V2],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.CALCULATE/OperationType.GEODISTANCE_V2,
				body: {
					
				},
			},
		},
	},
];