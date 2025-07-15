import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Verify Domain',
	value: OperationType.VERIFY_DOMAIN,
	description: 'Verify domain availability and status by performing HTTP requests',
	action: 'Verify domain status and availability',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Domain Name',
		name: 'domain',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. example.com',
		description: 'The domain name to verify (without protocol)',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VERIFY_DOMAIN],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VERIFY_DOMAIN],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VERIFY_DOMAIN}`,
				body: {
					domain: '={{$parameter.domain}}',
				},
			},
		},
	},
];
