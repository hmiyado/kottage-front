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
 * @interface Users
 */
export interface Users {
  /**
   *
   * @type {Array<User>}
   * @memberof Users
   */
  items: Array<User>
}

export function UsersFromJSON(json: any): Users {
  return UsersFromJSONTyped(json, false)
}

export function UsersFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Users {
  if (json === undefined || json === null) {
    return json
  }
  return {
    items: (json['items'] as Array<any>).map(UserFromJSON),
  }
}

export function UsersToJSON(value?: Users | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    items: (value.items as Array<any>).map(UserToJSON),
  }
}
