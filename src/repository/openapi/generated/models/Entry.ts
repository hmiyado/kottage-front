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
import { User, UserFromJSON, UserFromJSONTyped, UserToJSON } from './'

/**
 *
 * @export
 * @interface Entry
 */
export interface Entry {
  /**
   *
   * @type {number}
   * @memberof Entry
   */
  serialNumber: number
  /**
   *
   * @type {string}
   * @memberof Entry
   */
  title: string
  /**
   *
   * @type {string}
   * @memberof Entry
   */
  body: string
  /**
   *
   * @type {Date}
   * @memberof Entry
   */
  dateTime: Date
  /**
   *
   * @type {number}
   * @memberof Entry
   */
  commentsTotalCount: number
  /**
   *
   * @type {User}
   * @memberof Entry
   */
  author: User
}

export function EntryFromJSON(json: any): Entry {
  return EntryFromJSONTyped(json, false)
}

export function EntryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Entry {
  if (json === undefined || json === null) {
    return json
  }
  return {
    serialNumber: json['serialNumber'],
    title: json['title'],
    body: json['body'],
    dateTime: new Date(json['dateTime']),
    commentsTotalCount: json['commentsTotalCount'],
    author: UserFromJSON(json['author']),
  }
}

export function EntryToJSON(value?: Entry | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    serialNumber: value.serialNumber,
    title: value.title,
    body: value.body,
    dateTime: value.dateTime.toISOString(),
    commentsTotalCount: value.commentsTotalCount,
    author: UserToJSON(value.author),
  }
}