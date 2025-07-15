import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Calculate BMI',
	value: OperationType.BMI,
	description: 'Calculate Body Mass Index and get recommended nutrient distribution',
	action: 'Calculate BMI from height and weight',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Height (Cm)',
		name: 'height',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.BMI],
				resource: [ResourceType.CALCULATE],
			},
		},
		default: 0,
		placeholder: 'e.g. 175',
		description: 'The height in centimeters',
	},
	{
		displayName: 'Weight (Kg)',
		name: 'weight',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.BMI],
				resource: [ResourceType.CALCULATE],
			},
		},
		default: 0,
		placeholder: 'e.g. 70',
		description: 'The weight in kilograms',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CALCULATE],
				operation: [OperationType.BMI],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CALCULATE}/${OperationType.BMI}`,
				body: {
					height: '={{$parameter.height}}',
					weight: '={{$parameter.weight}}',
				},
			},
		},
	},
];
