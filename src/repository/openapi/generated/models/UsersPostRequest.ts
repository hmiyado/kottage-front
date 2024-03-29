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
 * @interface UsersPostRequest
 */
export interface UsersPostRequest {
  /**
   * screen name of user. this is unique in this server
   * @type {string}
   * @memberof UsersPostRequest
   */
  screenName: string
  /**
   *
   * @type {string}
   * @memberof UsersPostRequest
   */
  password: string
}

export function UsersPostRequestFromJSON(json: any): UsersPostRequest {
  return UsersPostRequestFromJSONTyped(json, false)
}

export function UsersPostRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UsersPostRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    screenName: json['screenName'],
    password: json['password'],
  }
}

export function UsersPostRequestToJSON(value?: UsersPostRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    screenName: value.screenName,
    password: value.password,
  }
}
