import * as AdpService from './AdpTaskService'
import request from 'request'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import config from 'config'

jest.mock('config', () => {
  const fakeRequest = jest.fn(() => adpApi)
  const adpApi = {
    getTaskUrl: 'anyGet_url',
    submitTaskUrl: 'anySubmit_url'
  }
  return {
    get: fakeRequest
  }
})

jest.mock('request')

describe('AdpTaskService', () => {
  test('should call request module and resolves getTask promise', async () => {
    const stub = request.mockImplementation(() => {
      void Promise.resolve({
        id: 1,
        operation: 'division',
        left: 999,
        right: 999
      })
    })
    void AdpService.getTask()
      .then(result => {
        expect(result).toEqual(stub)
      })
    expect(request).toBeCalledTimes(1)
  })

  test('should reject when promise throws on getTask function', async () => {
    const stub = request.mockImplementation(() => {
      void Promise.reject(new Error())
    })
    AdpService.getTask()
      .catch((err) => expect(err)
        .toEqual(stub))
  })

  test('should resolves submitTask with params passed', async () => {
    request.mockImplementation(() => {
      void Promise.resolve(httpRequest)
    })
    const httpRequest = {
      id: 'any_id',
      result: 1111
    }
    const { id, result } = httpRequest
    void AdpService.submitTask(id, result)
      .then(result => expect(result)
        .toEqual(httpRequest))
  })
})
