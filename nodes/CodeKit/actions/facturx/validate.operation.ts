import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { FacturxOperation } from './operation.types';

export const option = {
	name: 'Validate XML',
	value: FacturxOperation.VALIDATE,
	description: 'Validate Factur-X/Zugferd XML',
	action: 'Validate Factur-X/Zugferd XML',
};

export const description: INodeProperties[] = [
	{
		displayName: 'XML Content',
		name: 'xml',
		type: 'string',
		required: true,
		default: '',
		description: 'Factur-X/Zugferd XML content to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
				operation: [FacturxOperation.VALIDATE],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
				operation: [FacturxOperation.VALIDATE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.FACTURX}/${FacturxOperation.VALIDATE}`,
				body: {
					xml: '={{$parameter.xml}}',
				},
			},
		},
	},
];
