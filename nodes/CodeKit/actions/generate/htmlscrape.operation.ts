import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'HTML Scraping',
	value: OperationType.HTML_SCRAPE,
	description: 'Scrape HTML from a URL',
	action: 'Scrape HTML from a URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.HTML_SCRAPE],
			},
		},
		default: '',
		description: 'URL to scrape',
		placeholder: 'https://example.com',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.HTML_SCRAPE}`,
				body: {
					url: '={{$value.url}}',
				},
			},
		},
	},
	{
		displayName: 'Selector',
		name: 'selector',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.HTML_SCRAPE],
			},
		},
		default: '',
		description: 'CSS selector to target specific elements',
		placeholder: '.class-name, #ID, h1',
	},
	{
		displayName: 'Wait for Element',
		name: 'waitForElement',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.HTML_SCRAPE],
			},
		},
		default: false,
		description: 'Whether to wait for the element to appear',
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.HTML_SCRAPE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.GENERATE/OperationType.HTML_SCRAPE,
				body: {
					
				},
			},
		},
	},
];