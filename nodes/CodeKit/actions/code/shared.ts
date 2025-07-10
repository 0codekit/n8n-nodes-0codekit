import type {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';
import { mapArrayOfObjectsToStringArray } from '../../helpers/utils';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

/**
 * Shared requirements UI configuration for Python operations
 */
export const requirementsUIProperty: INodeProperties = {
	displayName: 'Requirements',
	name: 'requirementsUI',
	placeholder: 'Add Dependency',
	type: 'fixedCollection',
	default: [],
	typeOptions: {
		multipleValues: true,
	},
	description:
		'The PyPI libraries your Python code requires. For backwards compatibility, this can be left empty, and your dependencies will be discovered automatically. Please do not use this and specify your requirements explicitly, as the automatic discovery is inaccurate and unreliable, and its only purpose is to prevent old code from breaking.',
	options: [
		{
			name: 'requirementsValues',
			displayName: 'Requirements',
			values: [
				{
					displayName: 'Requirement Name',
					name: 'name',
					type: 'string',
					default: '',
				},
			],
		},
	],
};

/**
 * Shared dependencies UI configuration for all code operations
 */
export const dependenciesUIProperty: INodeProperties = {
	displayName: 'Dependencies',
	name: 'dependenciesUI',
	type: 'fixedCollection',
	placeholder: 'Add Dependency',
	default: [],
	options: [
		{
			name: 'dependenciesValues',
			displayName: 'Dependencies',
			values: [
				{
					displayName: 'Dependency Name',
					name: 'name',
					type: 'string',
					default: '',
				},
			],
		},
	],
	description:
		'The system dependencies your code requires. These will be installed using apk, the Alpine Package manager.',
};

/**
 * Creates a requirements UI property with specific display options
 */
export function createRequirementsUIProperty(operations: OperationType[]): INodeProperties {
	return {
		...requirementsUIProperty,
		displayOptions: {
			show: {
				operation: operations,
				resource: [ResourceType.CODE],
			},
		},
	};
}

/**
 * Creates a dependencies UI property with specific display options
 */
export function createDependenciesUIProperty(operations: OperationType[]): INodeProperties {
	return {
		...dependenciesUIProperty,
		displayOptions: {
			show: {
				operation: operations,
				resource: [ResourceType.CODE],
			},
		},
	};
}

/**
 * Shared function to set requirements and dependencies in request body
 */
export async function setRequirementsAndDependencies(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const requirementsUI = this.getNodeParameter('requirementsUI') as IDataObject;
	const requirementsValues = requirementsUI.requirementsValues as IDataObject[];

	const dependenciesUI = this.getNodeParameter('dependenciesUI') as IDataObject;
	const dependenciesValues = dependenciesUI.dependenciesValues as IDataObject[];

	const { body } = requestOptions;
	body.requirements = mapArrayOfObjectsToStringArray(requirementsValues);
	body.dependencies = mapArrayOfObjectsToStringArray(dependenciesValues);
	return requestOptions;
}

/**
 * Shared function to set only dependencies in request body (for JavaScript operations)
 */
export async function setDependencies(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const dependenciesUI = this.getNodeParameter('dependenciesUI') as IDataObject;
	const dependenciesValues = dependenciesUI.dependenciesValues as IDataObject[];

	const { body } = requestOptions;
	body.dependencies = mapArrayOfObjectsToStringArray(dependenciesValues);
	return requestOptions;
}
