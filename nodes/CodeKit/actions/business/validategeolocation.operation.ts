import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate Geolocation',
	value: OperationType.VALIDATE_GEO_LOCATION,
	description: 'Validate addresses and geographical coordinates for accuracy',
	action: 'Validate address or coordinates',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Address or Coordinates',
		name: 'address',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		required: true,
		default: '',
		placeholder: 'e.g. 123 Main St, New York, NY 10001 or 40.7128,-74.0060',
		description: 'The address or coordinates to validate for accuracy',
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
