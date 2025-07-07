import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert a CSV to Array',
	value: OperationType.CSV_TO_ARRAY,
	description: 'Takes a CSV string and converts it to an array',
	action: 'Convert a csv to array',
};

export const description: INodeProperties[] = [
	{
		displayName: 'CSV',
		name: 'csv',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CSV_TO_ARRAY],
			},
		},
		default: '',
		description: 'CSV string to convert',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.CSV_TO_ARRAY}`,
				body: {
					csv: '={{$value.csv}}',
				},
			},
		},
	},
	{
		displayName: 'Separator',
		name: 'separator',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CSV_TO_ARRAY],
			},
		},
		default: ',',
		description: 'CSV separator character',
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CSV_TO_ARRAY],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.CONVERT/OperationType.CSV_TO_ARRAY,
				body: {
					
				},
			},
		},
	},
];