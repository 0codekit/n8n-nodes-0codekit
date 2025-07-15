import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert a CSV to JSON',
	value: OperationType.CSV_TO_JSON,
	description: 'Takes a CSV string and converts it to a valid JSON',
	action: 'Convert a CSV to JSON',
};

export const description: INodeProperties[] = [
	{
		displayName: 'CSV',
		name: 'csv',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CSV_TO_JSON],
			},
		},
		default: '',
		description: 'CSV string to convert',
	},
	{
		displayName: 'Separator',
		name: 'separator',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CSV_TO_JSON],
			},
		},
		default: ',',
		description: 'CSV separator character',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CSV_TO_JSON],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.CSV_TO_JSON}`,
				body: {
					csv: '={{$parameter.csv}}',
					separator: '={{$parameter.separator}}',
				},
			},
		},
	},
];
