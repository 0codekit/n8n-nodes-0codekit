import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate Geo Location',
	value: OperationType.VALIDATE_GEO_LOCATION,
	description: 'Checks whether an address or coordinates are valid',
	action: 'Validate Geo Location',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		required: true,
		default: '',
		description: 'The address or coordinates to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_GEO_LOCATION],
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
				operation: [OperationType.VALIDATE_GEO_LOCATION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_GEO_LOCATION}`,
				body: {
					address: '={{$parameter.address}}',
				},
			},
		},
	},
];
