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
import {
  ErrorBase,
  ErrorBaseFromJSON,
  ErrorBaseFromJSONTyped,
  ErrorBaseToJSON,
  ErrorCause,
  ErrorCauseFromJSON,
  ErrorCauseFromJSONTyped,
  ErrorCauseToJSON,
} from './'

/**
 *
 * @export
 * @interface Error400
 */
export interface Error400 {
  /**
   *
   * @type {number}
   * @memberof Error400
   */
  status: number
  /**
   *
   * @type {string}
   * @memberof Error400
   */
  description: string
  /**
   *
   * @type {ErrorCause}
   * @memberof Error400
   */
  cause?: ErrorCause
}

export function Error400FromJSON(json: any): Error400 {
  return Error400FromJSONTyped(json, false)
}

export function Error400FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Error400 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status: json['status'],
    description: json['description'],
    cause: !exists(json, 'cause')
      ? undefined
      : ErrorCauseFromJSON(json['cause']),
  }
}

export function Error400ToJSON(value?: Error400 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status: value.status,
    description: value.description,
    cause: ErrorCauseToJSON(value.cause),
  }
}
