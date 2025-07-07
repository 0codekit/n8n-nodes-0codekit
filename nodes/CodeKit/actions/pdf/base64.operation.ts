import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'PDF to Base64',
	value: OperationType.BASE64,
	description: 'Converts a PDF file to a base64 string',
	action: 'Pdf to base64 a pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Pdf',
		name: 'pdf',
		type: 'string',
		description: 'PDF can be public URL or Buffer String',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.BASE64],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.BASE64}`,
				body: {
					pdf: '={{$parameter.pdf}}',
				},
			},
		},
	},
];
