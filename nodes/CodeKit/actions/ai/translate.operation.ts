import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Translate Text',
	value: OperationType.TRANSLATE,
	description: 'Translate text content between different languages using AI',
	action: 'Translate text to another language',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Content',
		name: 'text',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSLATE],
			},
		},
		default: '',
		placeholder: 'e.g. Hello, how are you today?',
		description: 'The text content to translate to another language',
	},
	{
		displayName: 'Target Language',
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
		description: 'The target language to translate the text to',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSLATE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.TRANSLATE}`,
				body: {
					text: '={{$parameter.text}}',
					resultLang: '={{$parameter.resultLang}}',
				},
			},
		},
	},
];
