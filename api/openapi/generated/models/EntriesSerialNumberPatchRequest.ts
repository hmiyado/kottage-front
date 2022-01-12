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
 * @interface EntriesSerialNumberPatchRequest
 */
export interface EntriesSerialNumberPatchRequest {
  /**
   * title of this entry
   * @type {string}
   * @memberof EntriesSerialNumberPatchRequest
   */
  title?: string
  /**
   * body of this entry
   * @type {string}
   * @memberof EntriesSerialNumberPatchRequest
   */
  body?: string
}

export function EntriesSerialNumberPatchRequestFromJSON(
  json: any
): EntriesSerialNumberPatchRequest {
  return EntriesSerialNumberPatchRequestFromJSONTyped(json, false)
}

export function EntriesSerialNumberPatchRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EntriesSerialNumberPatchRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    body: !exists(json, 'body') ? undefined : json['body'],
  }
}

export function EntriesSerialNumberPatchRequestToJSON(
  value?: EntriesSerialNumberPatchRequest | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    body: value.body,
  }
}
