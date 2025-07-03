import { ILoadOptions } from 'n8n-workflow';

export const getRowKey: ILoadOptions = {
	routing: {
		request: {
			method: 'GET',
			url: '/editor/make',
		},
		output: {
			postReceive: [
				{
					type: 'rootProperty',
					properties: {
						property: 'responseData',
					},
				},
				{
					type: 'setKeyValue',
					properties: {
						name: '={{$responseItem.label}}',
						value: '={{$responseItem.value}}',
					},
				},
				{
					type: 'sort',
					properties: {
						key: 'name',
					},
				},
			],
		},
	},
};

export const getCodeVariablesArray: ILoadOptions = {
	routing: {
		request: {
			method: 'GET',
			url: '/editor/make-variables',
			qs: {
				rowKey: '={{$rowKey}}',
			},
		},
		output: {
			postReceive: [
				{
					type: 'rootProperty',
					properties: {
						property: 'responseData',
					},
				},
				{
					type: 'setKeyValue',
					properties: {
						name: '={{$responseItem.label}}',
						value: '={{$responseItem.value}}',
					},
				},
				{
					type: 'sort',
					properties: {
						key: 'name',
					},
				},
			],
		},
	},
};
