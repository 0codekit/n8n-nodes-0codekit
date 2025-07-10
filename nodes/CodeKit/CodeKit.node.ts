import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { description as aiDescription } from './actions/ai';
import { description as businessDescription } from './actions/business';
import { description as calculateDescription } from './actions/calculate';
import { description as chartDescription } from './actions/chart';
import { description as codeDescription } from './actions/code';
import { description as convertDescription } from './actions/convert';
import { description as cryptoDescription } from './actions/crypto';
import { description as dateAndTimeDescription } from './actions/dateandtime';
import { description as facturxDescription } from './actions/facturx';
import { description as generateDescription } from './actions/generate';
import { description as imageDescription } from './actions/image';
import { description as operatorDescription } from './actions/operator';
import { description as pdfDescription } from './actions/pdf';
import { ResourceType } from './actions/resource.types';
import { description as schedulerDescription } from './actions/scheduler';
import { description as shortenedUrlDescription } from './actions/shortenedurl';
import { description as storageDescription } from './actions/storage';
import { description as textDescription } from './actions/text';

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
					{
						name: 'Image',
						value: ResourceType.IMAGE,
					},
					{
						name: 'Business',
						value: ResourceType.BUSINESS,
					},
					{
						name: 'Convert',
						value: ResourceType.CONVERT,
					},
					{
						name: 'Generate',
						value: ResourceType.GENERATE,
					},
					{
						name: 'Crypto',
						value: ResourceType.CRYPTO,
					},
					{
						name: 'Operator',
						value: ResourceType.OPERATOR,
					},
					{
						name: 'Storage',
						value: ResourceType.STORAGE,
					},
					{
						name: 'Scheduler',
						value: ResourceType.SCHEDULER,
					},
					{
						name: 'Text',
						value: ResourceType.TEXT,
					},
					{
						name: 'Chart',
						value: ResourceType.CHART,
					},
					{
						name: 'Code',
						value: ResourceType.CODE,
					},
					{
						name: 'Factur-X',
						value: ResourceType.FACTURX,
					},
					{
						name: 'Calculate',
						value: ResourceType.CALCULATE,
					},
					{
						name: 'Date and Time',
						value: ResourceType.DATE_AND_TIME,
					},
					{
						name: 'PDF',
						value: ResourceType.PDF,
					},
					{
						name: 'Shortened URL',
						value: ResourceType.SHORTENED_URL,
					},
				],
				default: '',
				required: true,
			},
			...aiDescription,
			...imageDescription,
			...businessDescription,
			...codeDescription,
			...convertDescription,
			...cryptoDescription,
			...generateDescription,
			...operatorDescription,
			...storageDescription,
			...schedulerDescription,
			...textDescription,
			...chartDescription,
			...facturxDescription,
			...calculateDescription,
			...dateAndTimeDescription,
			...pdfDescription,
			...shortenedUrlDescription,
		],
	};

	methods = {};
}
