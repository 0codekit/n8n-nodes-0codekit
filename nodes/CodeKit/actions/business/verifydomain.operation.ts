import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Verify Domain',
	value: OperationType.VERIFY_DOMAIN,
	description: 'Verifies a domain by performing an HTTP GET request against it',
	action: 'Verify Domain',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		required: true,
		default: '',
		description: 'The domain to verify',
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
