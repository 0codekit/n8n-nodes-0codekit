import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate Zugferd/Factur-X XML',
	value: OperationType.FACTURX_VALIDATE,
	description:
		'Validated Factur-X/Zugferd XML invoice according to the specification (level EN16931)',
	action: 'Validate Zugferd/Factur-X XML',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the PDF file to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_VALIDATE],
			},
		},
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		default: '',
		description: 'The buffer of the PDF file to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_VALIDATE],
			},
		},
	},
];
