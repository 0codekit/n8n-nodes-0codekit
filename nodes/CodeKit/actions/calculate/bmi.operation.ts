import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';
import { ResourceType } from '../resource.types';

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
		routing: {
			send: {
				type: 'body',
				property: 'height',
			},
		},
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
		routing: {
			send: {
				type: 'body',
				property: 'weight',
			},
		},
	},
];
