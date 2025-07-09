import { IDataObject } from 'n8n-workflow';

export function mapArrayOfObjectsToStringArray(objectsArr: IDataObject[]): string[] {
	if (!objectsArr) {
		return [];
	}
	const resultArr: string[] = [];

	objectsArr.forEach((el) => {
		resultArr.push(el.name as string);
	});

	return resultArr;
}
