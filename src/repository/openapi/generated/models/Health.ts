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
 * @interface Health
 */
export interface Health {
  /**
   *
   * @type {string}
   * @memberof Health
   */
  description: string
  /**
   *
   * @type {string}
   * @memberof Health
   */
  version: string
  /**
   *
   * @type {string}
   * @memberof Health
   */
  databaseType: string
}

export function HealthFromJSON(json: any): Health {
  return HealthFromJSONTyped(json, false)
}

export function HealthFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Health {
  if (json === undefined || json === null) {
    return json
  }
  return {
    description: json['description'],
    version: json['version'],
    databaseType: json['databaseType'],
  }
}

export function HealthToJSON(value?: Health | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    description: value.description,
    version: value.version,
    databaseType: value.databaseType,
  }
}
