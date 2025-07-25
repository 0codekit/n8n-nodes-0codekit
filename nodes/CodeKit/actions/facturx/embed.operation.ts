import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { FacturxOperation } from './operation.types';

export const option = {
	name: 'Embed XML',
	value: FacturxOperation.EMBED,
	description: 'Embed Factur-X/Zugferd XML into PDF',
	action: 'Embed Factur-X/Zugferd XML into PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF Source',
		name: 'pdfSource',
		type: 'options',
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'Buffer',
				value: 'buffer',
			},
		],
		default: 'url',
		description: 'Source of the PDF file',
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
				operation: [FacturxOperation.EMBED],
			},
		},
	},
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'URL of the PDF file to embed XML into',
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
				operation: [FacturxOperation.EMBED],
				pdfSource: ['url'],
			},
		},
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		required: true,
		default: '',
		description: 'Base64 encoded PDF buffer',
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
				operation: [FacturxOperation.EMBED],
				pdfSource: ['buffer'],
			},
		},
	},
	{
		displayName: 'XML Content',
		name: 'xml',
		type: 'string',
		required: true,
		default: '',
		description: 'Factur-X/Zugferd XML content to embed',
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
				operation: [FacturxOperation.EMBED],
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
				operation: [FacturxOperation.EMBED],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.FACTURX}/${FacturxOperation.EMBED}`,
				body: {
					pdfSource: '={{$parameter.pdfSource}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					xml: '={{$parameter.xml}}',
				},
			},
		},
	},
];
