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

import * as runtime from '../runtime'
import {
  Admin,
  AdminFromJSON,
  AdminToJSON,
  AdminsGetResponse,
  AdminsGetResponseFromJSON,
  AdminsGetResponseToJSON,
  Comment,
  CommentFromJSON,
  CommentToJSON,
  Comments,
  CommentsFromJSON,
  CommentsToJSON,
  CommentsPostRequest,
  CommentsPostRequestFromJSON,
  CommentsPostRequestToJSON,
  Entries,
  EntriesFromJSON,
  EntriesToJSON,
  EntriesPostRequest,
  EntriesPostRequestFromJSON,
  EntriesPostRequestToJSON,
  EntriesSerialNumberPatchRequest,
  EntriesSerialNumberPatchRequestFromJSON,
  EntriesSerialNumberPatchRequestToJSON,
  Entry,
  EntryFromJSON,
  EntryToJSON,
  Error400,
  Error400FromJSON,
  Error400ToJSON,
  Error401,
  Error401FromJSON,
  Error401ToJSON,
  Error403,
  Error403FromJSON,
  Error403ToJSON,
  Error404,
  Error404FromJSON,
  Error404ToJSON,
  Error409,
  Error409FromJSON,
  Error409ToJSON,
  Health,
  HealthFromJSON,
  HealthToJSON,
  SignInPostRequest,
  SignInPostRequestFromJSON,
  SignInPostRequestToJSON,
  User,
  UserFromJSON,
  UserToJSON,
  UserDetail,
  UserDetailFromJSON,
  UserDetailToJSON,
  Users,
  UsersFromJSON,
  UsersToJSON,
  UsersIdPatchRequest,
  UsersIdPatchRequestFromJSON,
  UsersIdPatchRequestToJSON,
  UsersPostRequest,
  UsersPostRequestFromJSON,
  UsersPostRequestToJSON,
} from '../models'

export interface CommentsGetRequest {
  limit?: number
  offset?: number
}

export interface EntriesGetRequest {
  limit?: number
  offset?: number
}

export interface EntriesPostOperationRequest {
  entriesPostRequest: EntriesPostRequest
}

export interface EntriesSerialNumberCommentsCommentIdDeleteRequest {
  serialNumber: number
  commentId: number
}

export interface EntriesSerialNumberCommentsGetRequest {
  serialNumber: number
  limit?: number
  offset?: number
}

export interface EntriesSerialNumberCommentsPostRequest {
  serialNumber: number
  commentsPostRequest: CommentsPostRequest
}

export interface EntriesSerialNumberDeleteRequest {
  serialNumber: number
}

export interface EntriesSerialNumberGetRequest {
  serialNumber: number
}

export interface EntriesSerialNumberPatchOperationRequest {
  serialNumber: number
  entriesSerialNumberPatchRequest: EntriesSerialNumberPatchRequest
}

export interface SignInPostOperationRequest {
  signInPostRequest: SignInPostRequest
}

export interface UsersAdminsDeleteRequest {
  admin: Admin
}

export interface UsersAdminsPatchRequest {
  admin: Admin
}

export interface UsersIdDeleteRequest {
  id: number
}

export interface UsersIdGetRequest {
  id: number
}

export interface UsersIdPatchOperationRequest {
  id: number
  usersIdPatchRequest: UsersIdPatchRequest
}

export interface UsersPostOperationRequest {
  usersPostRequest: UsersPostRequest
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * get comments
   */
  async commentsGetRaw(
    requestParameters: CommentsGetRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Comments>> {
    const queryParameters: any = {}

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/comments`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CommentsFromJSON(jsonValue),
    )
  }

  /**
   * get comments
   */
  async commentsGet(
    requestParameters: CommentsGetRequest,
    initOverrides?: RequestInit,
  ): Promise<Comments> {
    const response = await this.commentsGetRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * get entries
   */
  async entriesGetRaw(
    requestParameters: EntriesGetRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Entries>> {
    const queryParameters: any = {}

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/entries`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EntriesFromJSON(jsonValue),
    )
  }

  /**
   * get entries
   */
  async entriesGet(
    requestParameters: EntriesGetRequest,
    initOverrides?: RequestInit,
  ): Promise<Entries> {
    const response = await this.entriesGetRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * create a new entry
   */
  async entriesPostRaw(
    requestParameters: EntriesPostOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Entry>> {
    if (
      requestParameters.entriesPostRequest === null ||
      requestParameters.entriesPostRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'entriesPostRequest',
        'Required parameter requestParameters.entriesPostRequest was null or undefined when calling entriesPost.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/entries`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: EntriesPostRequestToJSON(requestParameters.entriesPostRequest),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EntryFromJSON(jsonValue),
    )
  }

  /**
   * create a new entry
   */
  async entriesPost(
    requestParameters: EntriesPostOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<Entry> {
    const response = await this.entriesPostRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * delete a comment with entry
   */
  async entriesSerialNumberCommentsCommentIdDeleteRaw(
    requestParameters: EntriesSerialNumberCommentsCommentIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.serialNumber === null ||
      requestParameters.serialNumber === undefined
    ) {
      throw new runtime.RequiredError(
        'serialNumber',
        'Required parameter requestParameters.serialNumber was null or undefined when calling entriesSerialNumberCommentsCommentIdDelete.',
      )
    }

    if (
      requestParameters.commentId === null ||
      requestParameters.commentId === undefined
    ) {
      throw new runtime.RequiredError(
        'commentId',
        'Required parameter requestParameters.commentId was null or undefined when calling entriesSerialNumberCommentsCommentIdDelete.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/entries/{serialNumber}/comments/{commentId}`
          .replace(
            `{${'serialNumber'}}`,
            encodeURIComponent(String(requestParameters.serialNumber)),
          )
          .replace(
            `{${'commentId'}}`,
            encodeURIComponent(String(requestParameters.commentId)),
          ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * delete a comment with entry
   */
  async entriesSerialNumberCommentsCommentIdDelete(
    requestParameters: EntriesSerialNumberCommentsCommentIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.entriesSerialNumberCommentsCommentIdDeleteRaw(
      requestParameters,
      initOverrides,
    )
  }

  /**
   * get comments with entry
   */
  async entriesSerialNumberCommentsGetRaw(
    requestParameters: EntriesSerialNumberCommentsGetRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Comments>> {
    if (
      requestParameters.serialNumber === null ||
      requestParameters.serialNumber === undefined
    ) {
      throw new runtime.RequiredError(
        'serialNumber',
        'Required parameter requestParameters.serialNumber was null or undefined when calling entriesSerialNumberCommentsGet.',
      )
    }

    const queryParameters: any = {}

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/entries/{serialNumber}/comments`.replace(
          `{${'serialNumber'}}`,
          encodeURIComponent(String(requestParameters.serialNumber)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CommentsFromJSON(jsonValue),
    )
  }

  /**
   * get comments with entry
   */
  async entriesSerialNumberCommentsGet(
    requestParameters: EntriesSerialNumberCommentsGetRequest,
    initOverrides?: RequestInit,
  ): Promise<Comments> {
    const response = await this.entriesSerialNumberCommentsGetRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * create a new comment to an entry
   */
  async entriesSerialNumberCommentsPostRaw(
    requestParameters: EntriesSerialNumberCommentsPostRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Comment>> {
    if (
      requestParameters.serialNumber === null ||
      requestParameters.serialNumber === undefined
    ) {
      throw new runtime.RequiredError(
        'serialNumber',
        'Required parameter requestParameters.serialNumber was null or undefined when calling entriesSerialNumberCommentsPost.',
      )
    }

    if (
      requestParameters.commentsPostRequest === null ||
      requestParameters.commentsPostRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'commentsPostRequest',
        'Required parameter requestParameters.commentsPostRequest was null or undefined when calling entriesSerialNumberCommentsPost.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/entries/{serialNumber}/comments`.replace(
          `{${'serialNumber'}}`,
          encodeURIComponent(String(requestParameters.serialNumber)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CommentsPostRequestToJSON(requestParameters.commentsPostRequest),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CommentFromJSON(jsonValue),
    )
  }

  /**
   * create a new comment to an entry
   */
  async entriesSerialNumberCommentsPost(
    requestParameters: EntriesSerialNumberCommentsPostRequest,
    initOverrides?: RequestInit,
  ): Promise<Comment> {
    const response = await this.entriesSerialNumberCommentsPostRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * delete the entry
   */
  async entriesSerialNumberDeleteRaw(
    requestParameters: EntriesSerialNumberDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.serialNumber === null ||
      requestParameters.serialNumber === undefined
    ) {
      throw new runtime.RequiredError(
        'serialNumber',
        'Required parameter requestParameters.serialNumber was null or undefined when calling entriesSerialNumberDelete.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/entries/{serialNumber}`.replace(
          `{${'serialNumber'}}`,
          encodeURIComponent(String(requestParameters.serialNumber)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * delete the entry
   */
  async entriesSerialNumberDelete(
    requestParameters: EntriesSerialNumberDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.entriesSerialNumberDeleteRaw(requestParameters, initOverrides)
  }

  /**
   * get the entry
   */
  async entriesSerialNumberGetRaw(
    requestParameters: EntriesSerialNumberGetRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Entry>> {
    if (
      requestParameters.serialNumber === null ||
      requestParameters.serialNumber === undefined
    ) {
      throw new runtime.RequiredError(
        'serialNumber',
        'Required parameter requestParameters.serialNumber was null or undefined when calling entriesSerialNumberGet.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/entries/{serialNumber}`.replace(
          `{${'serialNumber'}}`,
          encodeURIComponent(String(requestParameters.serialNumber)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EntryFromJSON(jsonValue),
    )
  }

  /**
   * get the entry
   */
  async entriesSerialNumberGet(
    requestParameters: EntriesSerialNumberGetRequest,
    initOverrides?: RequestInit,
  ): Promise<Entry> {
    const response = await this.entriesSerialNumberGetRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * update the entry
   */
  async entriesSerialNumberPatchRaw(
    requestParameters: EntriesSerialNumberPatchOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Entry>> {
    if (
      requestParameters.serialNumber === null ||
      requestParameters.serialNumber === undefined
    ) {
      throw new runtime.RequiredError(
        'serialNumber',
        'Required parameter requestParameters.serialNumber was null or undefined when calling entriesSerialNumberPatch.',
      )
    }

    if (
      requestParameters.entriesSerialNumberPatchRequest === null ||
      requestParameters.entriesSerialNumberPatchRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'entriesSerialNumberPatchRequest',
        'Required parameter requestParameters.entriesSerialNumberPatchRequest was null or undefined when calling entriesSerialNumberPatch.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/entries/{serialNumber}`.replace(
          `{${'serialNumber'}}`,
          encodeURIComponent(String(requestParameters.serialNumber)),
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: EntriesSerialNumberPatchRequestToJSON(
          requestParameters.entriesSerialNumberPatchRequest,
        ),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EntryFromJSON(jsonValue),
    )
  }

  /**
   * update the entry
   */
  async entriesSerialNumberPatch(
    requestParameters: EntriesSerialNumberPatchOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<Entry> {
    const response = await this.entriesSerialNumberPatchRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * get current server status
   */
  async healthGetRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Health>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/health`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      HealthFromJSON(jsonValue),
    )
  }

  /**
   * get current server status
   */
  async healthGet(initOverrides?: RequestInit): Promise<Health> {
    const response = await this.healthGetRaw(initOverrides)
    return await response.value()
  }

  /**
   * sign in as a user
   */
  async signInPostRaw(
    requestParameters: SignInPostOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<UserDetail>> {
    if (
      requestParameters.signInPostRequest === null ||
      requestParameters.signInPostRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'signInPostRequest',
        'Required parameter requestParameters.signInPostRequest was null or undefined when calling signInPost.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/sign-in`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: SignInPostRequestToJSON(requestParameters.signInPostRequest),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserDetailFromJSON(jsonValue),
    )
  }

  /**
   * sign in as a user
   */
  async signInPost(
    requestParameters: SignInPostOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<UserDetail> {
    const response = await this.signInPostRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * sign out from current user
   */
  async signOutPostRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/sign-out`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * sign out from current user
   */
  async signOutPost(initOverrides?: RequestInit): Promise<void> {
    await this.signOutPostRaw(initOverrides)
  }

  /**
   * delete a user from admin
   */
  async usersAdminsDeleteRaw(
    requestParameters: UsersAdminsDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.admin === null ||
      requestParameters.admin === undefined
    ) {
      throw new runtime.RequiredError(
        'admin',
        'Required parameter requestParameters.admin was null or undefined when calling usersAdminsDelete.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/users/admins`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
        body: AdminToJSON(requestParameters.admin),
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * delete a user from admin
   */
  async usersAdminsDelete(
    requestParameters: UsersAdminsDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.usersAdminsDeleteRaw(requestParameters, initOverrides)
  }

  /**
   * get admins
   */
  async usersAdminsGetRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<AdminsGetResponse>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/users/admins`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminsGetResponseFromJSON(jsonValue),
    )
  }

  /**
   * get admins
   */
  async usersAdminsGet(
    initOverrides?: RequestInit,
  ): Promise<AdminsGetResponse> {
    const response = await this.usersAdminsGetRaw(initOverrides)
    return await response.value()
  }

  /**
   * make a user as admin
   */
  async usersAdminsPatchRaw(
    requestParameters: UsersAdminsPatchRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.admin === null ||
      requestParameters.admin === undefined
    ) {
      throw new runtime.RequiredError(
        'admin',
        'Required parameter requestParameters.admin was null or undefined when calling usersAdminsPatch.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/users/admins`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: AdminToJSON(requestParameters.admin),
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * make a user as admin
   */
  async usersAdminsPatch(
    requestParameters: UsersAdminsPatchRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.usersAdminsPatchRaw(requestParameters, initOverrides)
  }

  /**
   * get
   */
  async usersCurrentGetRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<UserDetail>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/users/current`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserDetailFromJSON(jsonValue),
    )
  }

  /**
   * get
   */
  async usersCurrentGet(initOverrides?: RequestInit): Promise<UserDetail> {
    const response = await this.usersCurrentGetRaw(initOverrides)
    return await response.value()
  }

  /**
   * get users
   */
  async usersGetRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Users>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/users`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UsersFromJSON(jsonValue),
    )
  }

  /**
   * get users
   */
  async usersGet(initOverrides?: RequestInit): Promise<Users> {
    const response = await this.usersGetRaw(initOverrides)
    return await response.value()
  }

  /**
   * delete current user
   */
  async usersIdDeleteRaw(
    requestParameters: UsersIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling usersIdDelete.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/users/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * delete current user
   */
  async usersIdDelete(
    requestParameters: UsersIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.usersIdDeleteRaw(requestParameters, initOverrides)
  }

  /**
   * get a user
   */
  async usersIdGetRaw(
    requestParameters: UsersIdGetRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<UserDetail>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling usersIdGet.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/users/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserDetailFromJSON(jsonValue),
    )
  }

  /**
   * get a user
   */
  async usersIdGet(
    requestParameters: UsersIdGetRequest,
    initOverrides?: RequestInit,
  ): Promise<UserDetail> {
    const response = await this.usersIdGetRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * update current user
   */
  async usersIdPatchRaw(
    requestParameters: UsersIdPatchOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<User>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling usersIdPatch.',
      )
    }

    if (
      requestParameters.usersIdPatchRequest === null ||
      requestParameters.usersIdPatchRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'usersIdPatchRequest',
        'Required parameter requestParameters.usersIdPatchRequest was null or undefined when calling usersIdPatch.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/users/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: UsersIdPatchRequestToJSON(requestParameters.usersIdPatchRequest),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserFromJSON(jsonValue),
    )
  }

  /**
   * update current user
   */
  async usersIdPatch(
    requestParameters: UsersIdPatchOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<User> {
    const response = await this.usersIdPatchRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * create a user
   */
  async usersPostRaw(
    requestParameters: UsersPostOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<UserDetail>> {
    if (
      requestParameters.usersPostRequest === null ||
      requestParameters.usersPostRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'usersPostRequest',
        'Required parameter requestParameters.usersPostRequest was null or undefined when calling usersPost.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/users`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: UsersPostRequestToJSON(requestParameters.usersPostRequest),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserDetailFromJSON(jsonValue),
    )
  }

  /**
   * create a user
   */
  async usersPost(
    requestParameters: UsersPostOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<UserDetail> {
    const response = await this.usersPostRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
