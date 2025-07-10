import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as csvToArrayDescription,
	option as csvToArrayOption,
} from './csvtoarray.operation';
import {
	description as csvToJsonDescription,
	option as csvToJsonOption,
} from './csvtojson.operation';
import { description as currencyDescription, option as currencyOption } from './currency.operation';
import { description as ipToGeoDescription, option as ipToGeoOption } from './iptogeo.operation';
import {
	description as msgToJsonDescription,
	option as msgToJsonOption,
} from './msgtojson.operation';
import {
	description as nationIsoDescription,
	option as nationIsoOption,
} from './nationiso.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
			},
		},
		options: [
			csvToArrayOption,
			csvToJsonOption,
			currencyOption,
			ipToGeoOption,
			msgToJsonOption,
			nationIsoOption,
		],
		default: '',
	},
	...csvToArrayDescription,
	...csvToJsonDescription,
	...currencyDescription,
	...ipToGeoDescription,
	...msgToJsonDescription,
	...nationIsoDescription,
];
