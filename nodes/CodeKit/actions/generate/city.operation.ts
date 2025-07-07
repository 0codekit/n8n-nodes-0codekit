import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'City',
	value: OperationType.CITY,
	description: 'Get a random City',
	action: 'Generate a random city',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Language',
		name: 'language',
		type: 'options',
		options: [
			{ name: 'English', value: 'en' },
			{ name: 'German', value: 'de' },
			{ name: 'Spanish', value: 'es' },
			{ name: 'French', value: 'fr' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.CITY],
			},
		},
		default: 'en',
		description: 'Language for the city name',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.CITY}`,
				body: {
					language: '={{$value.language}}',
				},
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.CITY],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.GENERATE/OperationType.CITY,
				body: {
					
				},
			},
		},
	},
];