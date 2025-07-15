import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Email Type',
	value: OperationType.DETECT_EMAIL_TYPE,
	description: 'Analyze email content to detect the type and sender category',
	action: 'Detect email type and sender',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Email Subject',
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
		placeholder: 'e.g. Your order confirmation #12345',
		description: 'The subject line of the email to analyze',
	},
	{
		displayName: 'Email Body',
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
		placeholder: 'e.g. Thank you for your recent purchase...',
		description: 'The body content of the email to analyze',
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
