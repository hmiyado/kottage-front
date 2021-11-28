import { Entry as OpenApiEntry } from 'api/openapi/generated'
import { convertEntryToProps, EntryProps } from './entry'

describe('convertEntryToProps', () => {
  test('should convert OpenApiEntry to props', () => {
    const openapiEntry: OpenApiEntry = {
      serialNumber: 1,
      title: 'title',
      body: 'body',
      dateTime: new Date('2021-11-23T14:31:20+0000'),
      author: {
        id: 2,
        screenName: 'name',
      },
    }
    const actual = convertEntryToProps(openapiEntry)
    expect(actual).toStrictEqual({
      serialNumber: 1,
      title: 'title',
      body: 'body',
      time: '2021-11-23T23:31:20+0900',
      author: 'name',
    } as EntryProps)
  })
})
