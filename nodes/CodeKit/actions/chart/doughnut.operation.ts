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
		displayName: 'Data Points',
		name: 'data',
		type: 'json',
		required: true,
		default: '[10, 20, 30, 40, 50]',
		placeholder: '[10, 20, 30, 40, 50]',
		description: 'Data points for the doughnut chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Labels',
		name: 'labels',
		type: 'json',
		required: true,
		default: '["Category A", "Category B", "Category C", "Category D", "Category E"]',
		placeholder: '["Category A", "Category B", "Category C"]',
		description: 'Labels corresponding to the data points',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Chart Title',
		name: 'title',
		type: 'string',
		default: '',
		placeholder: 'Revenue Distribution',
		description: 'Title of the chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Background Color',
		name: 'backgroundColor',
		type: 'color',
		default: '#ffffff',
		placeholder: '#ffffff',
		description: 'Background color of the chart image',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Segment Colors',
		name: 'barsColors',
		type: 'json',
		default: '["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]',
		placeholder: '["#FF6384", "#36A2EB", "#FFCE56"]',
		description: 'Colors for the segments in the doughnut chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Border Colors',
		name: 'bordersColors',
		type: 'json',
		default: '["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]',
		placeholder: '["#FF6384", "#36A2EB", "#FFCE56"]',
		description: 'Colors for the borders of the segments',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Border Width',
		name: 'borderWidth',
		type: 'number',
		default: 1,
		description: 'Width of the borders around the segments',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		default: false,
		description: 'Whether to return a URL instead of the chart image',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.DOUGHNUT],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		placeholder: 'doughnut-chart.png',
		description: 'Optional filename for the generated chart image',
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
					data: '={{$parameter.data}}',
					labels: '={{$parameter.labels}}',
					title: '={{$parameter.title}}',
					backgroundColor: '={{$parameter.backgroundColor}}',
					barsColors: '={{$parameter.barsColors}}',
					bordersColors: '={{$parameter.bordersColors}}',
					borderWidth: '={{$parameter.borderWidth}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
				},
			},
		},
	},
];
