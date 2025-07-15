import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties } from 'n8n-workflow';
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
			send: {
				preSend: [validateIPaddress],
			},
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

export async function validateIPaddress(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const ip = this.getNodeParameter('ip') as string;

	const ipRegex =
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

	if (!ipRegex.test(ip)) {
		throw new Error('Invalid IP address format. Please provide a valid IPv4 address.');
	}

	return requestOptions;
}
