import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Nation ISO Switch',
	value: OperationType.NATION_ISO,
	description: 'Get the Nation by Country Code ISO or reverse',
	action: 'Nation ISO switch',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Input',
		name: 'input',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.NATION_ISO],
			},
		},
		default: '',
		description: 'Country name or ISO code',
		placeholder: 'Germany or DE',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.NATION_ISO}`,
				body: {
					input: '={{$value.input}}',
				},
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.NATION_ISO],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.CONVERT/OperationType.NATION_ISO,
				body: {
					
				},
			},
		},
	},
];