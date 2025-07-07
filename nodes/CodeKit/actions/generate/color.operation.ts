import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Color',
	value: OperationType.COLOR,
	description: 'Get a random Color',
	action: 'Generate a random color',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{ name: 'HEX', value: 'hex' },
			{ name: 'RGB', value: 'rgb' },
			{ name: 'HSL', value: 'hsl' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.COLOR],
			},
		},
		default: 'hex',
		description: 'Color format to generate',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.COLOR}`,
				body: {
					format: '={{$value.format}}',
				},
			},
		},
	},
];
