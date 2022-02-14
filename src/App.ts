import { getTask, submitTask } from './Services/adpTaskService'
import { operationsHandler } from './Utils/OperationsHelper'
/**
 * the main app function that makes the request and runs the task operations
 * @returns {Promise<string>}
*/
export const main = async (): Promise<string> => {
  try {
    const task = await getTask()

    // allow reviewer to be able to see the tasks on console
    console.log('---Task: ', task)

    const { id, left, right, operation } = task
    const resultOp = operationsHandler(left, right, operation)
    const result = await submitTask(id, resultOp)

    // result from the server
    console.log('---Submit task result: ', result)

    return result
  } catch (error) {
    console.log('error message: ', error)
    throw new Error('fail to try to submit task')
  }
}
