import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { UserOperation } from './operation.types';

export const option = {
	name: 'Retrieve Credits',
	value: UserOperation.RETRIEVE_CREDITS,
	description: 'Retrieve remaining credits',
	action: 'Retrieve remaining credits',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Retrieve Credits',
		name: 'retrieveCredits',
		type: 'hidden',
		required: true,
		default: true,
		description: 'Retrieve remaining credits',
		displayOptions: {
			show: {
				resource: [ResourceType.USER],
				operation: [UserOperation.RETRIEVE_CREDITS],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/user/retrievecredits',
			},
		},
	},
];
