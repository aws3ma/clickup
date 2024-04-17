import axios, { XiorError, XiorResponse } from 'xior'
import { baseurl } from '../baseurl'
import { GetListsResponse } from './models/getLists'
import { CreateListInput } from './models/createList'
import { CreateListResponse } from './models/createList'
import { GetFolderlessListsResponse } from './models/getFolderlessLists'
import {
  CreateFolderlessListInput,
  CreateFolderlessListResponse,
} from './models/createFolderlessList'
import { GetListResponse } from './models/getList'
import { UpdateListInput, UpdateListResponse } from './models/UpdateList'
import { ClickupApiAccessToken, ClickupError } from '../globalInterfaces'
export class Lists {
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
  getLists = async (
    folder_id: string | number,
    archived: boolean = false,
  ): Promise<
    XiorResponse<GetListsResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.get<GetListsResponse>(
        `/folder/${folder_id}/list?archived=${archived}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  createList = async (
    folder_id: string,
    data: CreateListInput,
  ): Promise<
    XiorResponse<CreateListResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.post<CreateListResponse>(
        `/folder/${folder_id}/list`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  getFolderlessLists = async (
    space_id: string | number,
  ): Promise<
    | XiorResponse<GetFolderlessListsResponse>
    | XiorError
    | undefined
  > => {
    try {
      const response = await axios.get<GetFolderlessListsResponse>(
        `/space/${space_id}/list`,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  createFolderlessList = async (
    space_id: string,
    data: CreateFolderlessListInput,
  ): Promise<
    | XiorResponse<CreateFolderlessListResponse>
    | XiorError
    | undefined
  > => {
    try {
      const response = await axios.post<CreateFolderlessListResponse>(
        `/space/${space_id}/list`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  getList = async (
    list_id: string | number,
  ): Promise<
    XiorResponse<GetListResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.get<GetListResponse>(`/list/${list_id}`)
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  updateList = async (
    list_id: string,
    data: UpdateListInput,
  ): Promise<
    XiorResponse<UpdateListResponse> | XiorError | undefined
  > => {
    try {
      const response = await axios.put<UpdateListResponse>(
        `/list/${list_id}`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  deleteList = async (
    list_id: string,
  ): Promise<XiorResponse<any> | XiorError | undefined> => {
    try {
      const response = await axios.delete(`/list/${list_id}`)
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  addTaskToList = async (
    list_id: string,
    task_id: string,
  ): Promise<XiorResponse<any> | XiorError | undefined> => {
    try {
      const response = await axios.post(`/list/${list_id}/task/${task_id}`)
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  removeTaskFromList = async (
    list_id: string,
    task_id: string,
  ): Promise<XiorResponse<any> | XiorError | undefined> => {
    try {
      const response = await axios.delete(`/list/${list_id}/task/${task_id}`)
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
}
