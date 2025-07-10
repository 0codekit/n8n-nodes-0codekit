import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Email Type',
	value: OperationType.DETECT_EMAIL_TYPE,
	description: 'Detects the sender (type) of email',
	action: 'Detect email type',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_EMAIL_TYPE],
			},
		},
		default: '',
		description: 'The subject of the email you want to analyse',
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_EMAIL_TYPE],
			},
		},
		default: '',
		description: 'The body of the email you want to analyse',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_EMAIL_TYPE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.DETECT_EMAIL_TYPE}`,
				body: {
					subject: '={{$parameter.subject}}',
					body: '={{$parameter.body}}',
				},
			},
		},
	},
];
