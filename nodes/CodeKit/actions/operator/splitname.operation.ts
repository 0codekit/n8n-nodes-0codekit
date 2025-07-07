import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Split Name',
	value: OperatorOperation.SPLIT_NAME,
	description: 'Split full name into first and last name',
	action: 'Split full name into first and last name',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Full Name',
		name: 'fullName',
		type: 'string',
		required: true,
		default: '',
		description: 'Full name to split',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.SPLIT_NAME],
			},
		}',
				},
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.SPLIT_NAME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.OPERATOR/OperatorOperation.SPLIT_NAME,
				body: {
					
				},
			},
		},
	},
];