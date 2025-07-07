import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Customizable Information From Text',
	value: OperationType.EXTRACT_FROM_TEXT,
	description:
		'Use this action to flexibly extract precise information from text according to your needs',
	action: 'Extract customizable information from text',
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
				operation: [OperationType.EXTRACT_FROM_TEXT],
			},
		},
		default: '',
		description: 'The text in which the information will be searched',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.EXTRACT_FROM_TEXT}`,
				body: {
					text: '={{$value.text}}',
				},
			},
		},
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.EXTRACT_FROM_TEXT],
			},
		},
		default: '',
		description: 'A prompt that provides context for the text',
	},
	{
		displayName: 'Fields',
		name: 'fieldsUI',
		placeholder: 'Add Additional Fields',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: 'An Array of objects that contains search values',
		options: [
			{
				name: 'fieldsValues',
				displayName: 'Field Values',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						description:
							'Field Name (Key): This is the name or key for each field. The list of field names you provide must have the same number of items as the other lists (e.g., descriptions and validation regex).',
						default: '',
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description:
							'Prompt describing the kind of information that this field should contain. The list of field names you provide must have the same number of items as the other lists (e.g., name and validation regex).',
					},
					{
						displayName: 'Validation Regex',
						name: 'validationRegex',
						type: 'string',
						default: '',
						description:
							'Regular expression for validation. The list of field names you provide must have the same number of items as the other lists (e.g., descriptions and validation regex).',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.EXTRACT_FROM_TEXT],
			},
		},
	},
];
