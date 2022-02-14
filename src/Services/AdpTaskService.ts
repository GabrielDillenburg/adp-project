/* eslint-disable @typescript-eslint/explicit-function-return-type */
import request from 'request'
import config from 'config'

const { getTaskUrl, submitTaskUrl } = config.get('adpApi')

interface taskType {
  id: string
  operation: string
  left: number
  right: number
}

/**
 * get task request.
 * @see {@link https://interview.adpeai.com/api/v1/get-task}
 */
export const getTask = async (): Promise<taskType> => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: getTaskUrl
    }

    request(options, (err: any, _: any, body: any) => {
      if (err) {
        console.log('getTask', err)
        reject(err)
      } else resolve(JSON.parse(body))
    })
  })
}

/**
 * Submit task request. Operations methods: remainder, subtraction, division, addition, multiplication
 * @param {string} taskId task id
 * @param {number} result  operation result value
 */
export const submitTask = async (id: string, result: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      id,
      result
    })

    const options = {
      method: 'POST',
      url: submitTaskUrl,
      headers: { 'Content-Type': 'application/json' },
      body: body
    }

    request(options, (err, _, body) => {
      if (err) {
        console.log('submitTask', err)
        reject(err)
      } else resolve(body)
    })
  })
}
