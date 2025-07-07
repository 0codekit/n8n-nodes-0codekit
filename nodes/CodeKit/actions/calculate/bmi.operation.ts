import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'BMI',
	value: OperationType.BMI,
	description: 'Calculates the Body Mass Index and outputs recommended nutrients distribution',
	action: 'Bmi calculator',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Height in Cm',
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
		description: 'The height in centimeters',
	},
	{
		displayName: 'Weight in Kg',
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
