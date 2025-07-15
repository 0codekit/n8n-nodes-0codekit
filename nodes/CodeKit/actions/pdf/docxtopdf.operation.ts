import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert DOCX to PDF',
	value: OperationType.DOCX_TO_PDF,
	description: 'Convert Word document (DOCX) to PDF format',
	action: 'Convert Word document (DOCX) to PDF format',
};

export const description: INodeProperties[] = [
	{
		displayName: 'DOCX Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DOCX_TO_PDF],
			},
		},
		default: '',
		description: 'Binary buffer data of the DOCX file',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DOCX_TO_PDF],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DOCX_TO_PDF],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.DOCX_TO_PDF}`,
				body: {
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
