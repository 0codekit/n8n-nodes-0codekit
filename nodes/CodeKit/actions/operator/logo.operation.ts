import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Get Website Logo',
	value: OperatorOperation.LOGO,
	description: 'Get website logo URL',
	action: 'Get website logo URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'Website URL to get logo from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.LOGO],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/logo',
				body: {
					url: '={{$value.url}}',
				},
			},
		},
	},
];
