import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { description as aiDescription } from './actions/ai';
import { description as imageDescription } from './actions/image';
import { ResourceType } from './actions/resource.types';

export class CodeKit implements INodeType {
	description: INodeTypeDescription = {
		displayName: '0CodeKit',
		name: 'codeKit',
		icon: 'file:codekit.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'A toolbox of no-code utilities',
		defaults: {
			name: '0CodeKit',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'codeKitApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://prod.0codekit.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'AI',
						value: ResourceType.AI,
					},
				],
				default: '',
				required: true,
			},
			...aiDescription, // Importing AI operations
			...imageDescription,
		],
	};

	methods = {};
}
