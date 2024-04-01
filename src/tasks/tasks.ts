import axios from 'axios'
import { baseurl } from '../baseurl'
import { GetTasksResponse } from './models/GetTasksResponse'
import { CreateTaskInput, CreateTaskResponse } from './models/CreateTask'
import { GetTaskResponse } from './models/getTaskResponse'
import { UpdateTaskInput, UpdateTaskResponse } from './models/updateTask'

export class Tasks {
  constructor(private readonly accessToken: string) {}
  getTasks = async (list_id: string, archived: boolean = false, subtasks: boolean = true) => {
    try {
      const response: GetTasksResponse = await axios.get(
        `${baseurl}/list/${list_id}/task?archived=${archived}&subtasks=${subtasks}`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  createTask = async (
    list_id: string,
    data: CreateTaskInput,
  ) => {
    try {
      const response: CreateTaskResponse = await axios.post(
        `${baseurl}/list/${list_id}/task`,
        data,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  getTask = async (task_id: string, include_subtasks:boolean = true) => {
    try {
      const response: GetTaskResponse = await axios.get(
        `${baseurl}/task/${task_id}?include_subtasks=${include_subtasks}`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  updateTask = async (task_id: string, data: UpdateTaskInput) => {
    try {
      const response: UpdateTaskResponse = await axios.put(
        `${baseurl}/list/${task_id}`,
        data,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  deleteTask = async (task_id: string) => {
    try {
      await axios.delete(
        `${baseurl}/task/${task_id}`,
        {
          headers: {
            Authorization: this.accessToken,
            "Content-Type": "application/json"
          },
        },
      )
      return true
    } catch (error) {
      console.log(error)
    }
  }
  getFilteredTeamTask = async (team_id: string, include_subtasks:boolean = true) => {
    try {
      const response: GetTaskResponse = await axios.get(
        `${baseurl}/team/${team_id}/task?include_subtasks=${include_subtasks}`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  getTaskTimeInStatus = async (task_id: string, custom_task_ids:boolean= false,team_id?:string) => {
    try {
      const url:string = `${baseurl}/task/${task_id}/time_in_status?custom_task_ids=${custom_task_ids}`
      if(team_id) {
        url.concat(`&team_id=${team_id}`)
      }
      const response: GetTaskResponse = await axios.get(
        url,
        {
          headers: {
            Authorization: this.accessToken,
            "Content-Type": "application/json"
          },
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  // getBulkTasksTimeInStatus = async (task_id: string, custom_task_ids:boolean= false,team_id?:string) => {
  //   try {
  //     const url:string = `${baseurl}/task/${task_id}/time_in_status?custom_task_ids=${custom_task_ids}`
  //     if(team_id) {
  //       url.concat(`&team_id=${team_id}`)
  //     }
  //     const response: GetTaskResponse = await axios.get(
  //       url,
  //       {
  //         headers: {
  //           Authorization: this.accessToken,
  //           "Content-Type": "application/json"
  //         },
  //       },
  //     )
  //     return response
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}
