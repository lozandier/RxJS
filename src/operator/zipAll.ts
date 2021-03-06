import {ZipOperator} from './zip-support';

export function zipAll<T, R>(project?: (...values: Array<any>) => R) {
  return this.lift(new ZipOperator(project));
}
