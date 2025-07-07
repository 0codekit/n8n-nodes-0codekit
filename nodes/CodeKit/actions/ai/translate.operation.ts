import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Translate',
	value: OperationType.TRANSLATE,
	description: 'Translate text',
	action: 'Translate',
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
				operation: [OperationType.TRANSLATE],
			},
		},
		default: '',
		description: 'The text you want to translate',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.TRANSLATE}`,
				body: {
					text: '={{$value.text}}',
				},
			},
		},
	},
	{
		displayName: 'Result Language',
		name: 'resultLang',
		type: 'options',
		options: [
			{ name: 'Chinese', value: 'zh' },
			{ name: 'English', value: 'en' },
			{ name: 'French', value: 'fr' },
			{ name: 'German', value: 'de' },
			{ name: 'Italian', value: 'it' },
			{ name: 'Japanese', value: 'ja' },
			{ name: 'Korean', value: 'ko' },
			{ name: 'Portuguese', value: 'pt' },
			{ name: 'Russian', value: 'ru' },
			{ name: 'Spanish', value: 'es' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSLATE],
			},
		},
		default: 'en',
		description: 'The language to translate to',
	},
];
