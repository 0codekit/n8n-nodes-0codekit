import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Calculate Distance',
	value: OperationType.GEODISTANCE_V2,
	description: 'Calculate the distance between two addresses or geographical coordinates',
	action: 'Calculate distance between locations',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Starting Location',
		name: 'startPoint',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: {
				operation: [OperationType.GEODISTANCE_V2],
				resource: [ResourceType.CALCULATE],
			},
		},
		default: '',
		placeholder: 'e.g. Berlin, Germany or 52.5200,13.4050',
		description: 'The starting location as an address or coordinates (latitude,longitude)',
	},
	{
		displayName: 'Ending Location',
		name: 'endPoint',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.GEODISTANCE_V2],
				resource: [ResourceType.CALCULATE],
			},
		},
		default: '',
		placeholder: 'e.g. Hamburg, Germany or 53.5511,9.9937',
		description: 'The ending location as an address or coordinates (latitude,longitude)',
	},
	{
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
				url: `/${ResourceType.CALCULATE}/${OperationType.GEODISTANCE_V2}`,
				body: {
					startPoint: '={{$parameter.startPoint}}',
					endPoint: '={{$parameter.endPoint}}',
				},
			},
		},
	},
];
