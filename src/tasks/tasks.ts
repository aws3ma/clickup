import axios, { XiorResponse, XiorError } from 'xior'
import { baseurl } from '../baseurl'
import { GetTasksResponse } from './models/getTasks'
import { CreateTaskInput, CreateTaskResponse } from './models/createTask'
import { GetTaskResponse } from './models/getTask'
import { UpdateTaskInput, UpdateTaskResponse } from './models/updateTask'
import { ClickupApiAccessToken, ClickupError } from '../globalInterfaces'

export class Tasks {
  constructor(private readonly accessToken: ClickupApiAccessToken) {
    axios.defaults.baseURL = baseurl
    axios.interceptors.request.use(config => {
      if (this.accessToken.access_token !== '') {
        ;(config.headers.Authorization = `${this.accessToken.token_type} ${this.accessToken.access_token}`),
          (config.headers['Content-Type'] = 'application/json')
      }
      return config
    })
  }
  getTasks = async (
    list_id: string,
    archived: boolean = false,
    subtasks: boolean = true,
  ): Promise<
    XiorResponse<GetTasksResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.get<GetTasksResponse>(
        `/list/${list_id}/task?archived=${archived}&subtasks=${subtasks}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  createTask = async (
    list_id: string,
    data: CreateTaskInput,
  ): Promise<
    XiorResponse<CreateTaskResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.post<CreateTaskResponse>(
        `/list/${list_id}/task`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  getTask = async (
    task_id: string,
    include_subtasks: boolean = true,
  ): Promise<
    XiorResponse<GetTaskResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.get<GetTaskResponse>(
        `/task/${task_id}?include_subtasks=${include_subtasks}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  updateTask = async (
    task_id: string,
    data: UpdateTaskInput,
  ): Promise<
    XiorResponse<UpdateTaskResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.put<UpdateTaskResponse>(
        `/list/${task_id}`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  deleteTask = async (
    task_id: string,
  ): Promise<XiorResponse<any> | XiorError | undefined> => {
    try {
      const response = await axios.delete(`/task/${task_id}`)
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  // getFilteredTeamTask = async (
  //   team_id: string,
  //   include_subtasks: boolean = true,
  // ): Promise<
  //   XiorResponse<any> | XiorError | undefined
  // > => {
  //   try {
  //     const response = await axios.get(
  //       `/team/${team_id}/task?include_subtasks=${include_subtasks}`,
  //     )
  //     return response
  //   } catch (error: any) {
  //     if (error instanceof XiorError) return error
  //     console.log(error)
  //   }
  // }
  // getTaskTimeInStatus = async (
  //   task_id: string,
  //   custom_task_ids: boolean = false,
  //   team_id?: string,
  // ): Promise<
  //   XiorResponse<any> | XiorError | undefined
  // > => {
  //   try {
  //     const url: string = `/task/${task_id}/time_in_status?custom_task_ids=${custom_task_ids}`
  //     if (team_id) {
  //       url.concat(`&team_id=${team_id}`)
  //     }
  //     const response = await axios.get(url)
  //     return response
  //   } catch (error) {
  //     console.log(error)
  //     // return error
  //   }
  // }
  // getBulkTasksTimeInStatus = async (task_id: string, custom_task_ids:boolean= false,team_id?:string) => {
  //   try {
  //     const url:string = `/task/${task_id}/time_in_status?custom_task_ids=${custom_task_ids}`
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
