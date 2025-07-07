import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'IP to Geo',
	value: OperationType.IP_TO_GEO,
	description: 'Gets the geolocation of an IP address',
	action: 'Ip to geo converter',
};

export const description: INodeProperties[] = [
	{
		displayName: 'IP Address',
		name: 'ip',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.IP_TO_GEO],
			},
		},
		default: '',
		description: 'IP address to get geolocation for',
		placeholder: '8.8.8.8',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.IP_TO_GEO],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.IP_TO_GEO}`,
				body: {
					ip: '={{$parameter.ip}}',
				},
			},
		},
	},
];
