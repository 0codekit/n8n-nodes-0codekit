import type { INodeProperties } from 'n8n-workflow';
import { OperationType } from './operation.types';

export const option = {
	name: 'Overlay',
	value: OperationType.OVERLAY,
	description: 'Overlay an image',
	action: 'Overlay',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		routing: {
			send: {
				type: 'body',
				property: 'operation',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'body',
						},
					},
				],
			},
			request: {
				method: 'POST',
				url: '/image/overlay',
			},
		},
	},
];
