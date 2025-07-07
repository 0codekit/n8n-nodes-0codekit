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
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.DETECT_EMAIL_TYPE],
			},
		},
		default: '',
		description: 'Text you want to analyse',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.DETECT_EMAIL_TYPE}`,
				body: {
					text: '={{$value.text}}',
				},
			},
		},
	},
];
