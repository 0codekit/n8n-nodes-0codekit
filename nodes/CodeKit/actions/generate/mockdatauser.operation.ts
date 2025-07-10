import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Mock Data User',
	value: OperationType.MOCKDATA_USER,
	description: 'Generate mock data for a user',
	action: 'Generate mock data for a user',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Number of Users',
		name: 'count',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.MOCKDATA_USER],
			},
		},
		default: 1,
		description: 'Number of mock users to generate',
	},
	{
		displayName: 'Include Avatar',
		name: 'includeAvatar',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.MOCKDATA_USER],
			},
		},
		default: true,
		description: 'Whether to include avatar URLs',
	},
	{
		displayName: 'Locale',
		name: 'locale',
		type: 'options',
		options: [
			{ name: 'English (US)', value: 'en_US' },
			{ name: 'German (DE)', value: 'de_DE' },
			{ name: 'French (FR)', value: 'fr_FR' },
			{ name: 'Spanish (ES)', value: 'es_ES' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.MOCKDATA_USER],
			},
		},
		default: 'en_US',
		description: 'Locale for the generated data',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.MOCKDATA_USER],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.MOCKDATA_USER}`,
				body: {
					count: '={{$parameter.count}}',
					includeAvatar: '={{$parameter.includeAvatar}}',
					locale: '={{$parameter.locale}}',
				},
			},
		},
	},
];
