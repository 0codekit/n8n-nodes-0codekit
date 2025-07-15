import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { ChartOperation } from './operation.types';

export const option = {
	name: 'Doughnut Chart',
	value: ChartOperation.DOUGHNUT,
	description: 'Generate a doughnut chart',
	action: 'Generate a doughnut chart',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Chart Data',
		name: 'chartData',
		type: 'json',
		required: true,
		default: '{}',
		description: 'Chart data in JSON format. For more information, refer to the 0CodeKit API documentation.',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Chart Options',
		name: 'chartOptions',
		type: 'json',
		default: '{}',
		description: 'Chart options in JSON format. For more information, refer to the 0CodeKit API documentation.',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		default: 800,
		description: 'Width of the chart in pixels',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		default: 600,
		description: 'Height of the chart in pixels',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.CHART}/${ChartOperation.DOUGHNUT}`,
				body: {
					chartData: '={{$parameter.chartData}}',
					chartOptions: '={{$parameter.chartOptions}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
				},
			},
		},
	},
];
