import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Contact Information',
	value: OperationType.EXTRACT_CONTACT_INFORMATION,
	description: 'Extract contact details like names, emails, and phone numbers from text',
	action: 'Extract contact information from text',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Content',
		name: 'prompt',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.EXTRACT_CONTACT_INFORMATION],
			},
		},
		default: '',
		placeholder:
			'e.g. John Smith, CEO at Tech Corp. Email: john@techcorp.com, Phone: +1-555-123-4567',
		description: 'The text content to analyze for contact information extraction',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.EXTRACT_CONTACT_INFORMATION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.EXTRACT_CONTACT_INFORMATION}`,
				body: {
					prompt: '={{$parameter.prompt}}',
				},
			},
		},
	},
];
