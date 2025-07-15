import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert CSV to JSON',
	value: OperationType.CSV_TO_JSON,
	description: 'Convert CSV data to valid JSON format',
	action: 'Convert CSV to JSON',
};

export const description: INodeProperties[] = [
	{
		displayName: 'CSV Data',
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
		description: 'CSV data to convert to JSON format',
		placeholder: 'e.g. Name,Age,City\nJohn,30,New York\nJane,25,London',
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
		description: 'Character used to separate CSV fields',
		placeholder: 'e.g. , or ; or |',
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
