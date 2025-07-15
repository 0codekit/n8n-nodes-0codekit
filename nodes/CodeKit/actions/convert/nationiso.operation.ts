import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert Country Name/ISO',
	value: OperationType.NATION_ISO,
	description: 'Convert between country names and ISO codes bidirectionally',
	action: 'Convert country name to ISO code or vice versa',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Country Name or ISO Code',
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
		description: 'Country name or ISO code to convert',
		placeholder: 'e.g. Germany or DE',
	},
	{
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
				url: `/${ResourceType.CONVERT}/${OperationType.NATION_ISO}`,
				body: {
					input: '={{$parameter.input}}',
				},
			},
		},
	},
];
