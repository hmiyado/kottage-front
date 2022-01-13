/* tslint:disable */
/* eslint-disable */
/**
 * kottage
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface Error403Cause
 */
export interface Error403Cause {
  /**
   *
   * @type {string}
   * @memberof Error403Cause
   */
  kind: Error403CauseKindEnum
}

/**
 * @export
 * @enum {string}
 */
export enum Error403CauseKindEnum {
  CsrfTokenRequired = 'CsrfTokenRequired',
  CsrfHeaderRequired = 'CsrfHeaderRequired',
  InvalidOrigin = 'InvalidOrigin',
}

export function Error403CauseFromJSON(json: any): Error403Cause {
  return Error403CauseFromJSONTyped(json, false)
}

export function Error403CauseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Error403Cause {
  if (json === undefined || json === null) {
    return json
  }
  return {
    kind: json['kind'],
  }
}

export function Error403CauseToJSON(value?: Error403Cause | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    kind: value.kind,
  }
}
