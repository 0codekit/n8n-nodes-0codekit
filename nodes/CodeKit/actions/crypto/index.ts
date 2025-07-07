import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { description as decryptDescription, option as decryptOption } from './decrypt.operation';
import { description as encryptDescription, option as encryptOption } from './encrypt.operation';
import { description as hashDescription, option as hashOption } from './hash.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CRYPTO],
			},
		},
		options: [encryptOption, decryptOption, hashOption],
		default: '',
	},
	...encryptDescription,
	...decryptDescription,
	...hashDescription,
];
