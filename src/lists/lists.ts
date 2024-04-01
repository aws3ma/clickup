import axios from 'axios'
import { baseurl } from '../baseurl'
import { GetListsResponse } from './models/getListsResponse'
import { CreateListInput } from './models/createListInput'
import { CreateListResponse } from './models/createListResponse'
import { GetFolderlessListsResponse } from './models/getFolderlessListsResponse'
import { CreateFolderlessListsInput, CreateFolderlessListsResponse } from './models/createFolderlessList'
import { GetListResponse } from './models/getListResponse'
import { UpdateListInput, UpdateListResponse } from './models/UpdateList'
export class Lists {
  constructor(private readonly accessToken: string) {}
  getLists = async (folder_id: string, archived: boolean = false) => {
    try {
      const response: GetListsResponse = await axios.get(
        `${baseurl}/folder/${folder_id}/list?archived=${archived}`,
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
  createList = async (
    folder_id: string,
    data: CreateListInput,
  ) => {
    try {
      const response: CreateListResponse = await axios.post(
        `${baseurl}/folder/${folder_id}/list`,
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
  getFolderlessLists = async (space_id: string) => {
    try {
      const response: GetFolderlessListsResponse = await axios.get(
        `${baseurl}/space/${space_id}/list`,
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
  createFolderlessList = async (
    space_id: string,
    data: CreateFolderlessListsInput,
  ) => {
    try {
      const response: CreateFolderlessListsResponse = await axios.post(
        `${baseurl}/space/${space_id}/list`,
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
  getList = async (list_id: string) => {
    try {
      const response: GetListResponse = await axios.get(
        `${baseurl}/list/${list_id}`,
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
  updateList = async (list_id: string, data: UpdateListInput) => {
    try {
      const response: UpdateListResponse = await axios.put(
        `${baseurl}/list/${list_id}`,
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
  deleteList = async (list_id: string) => {
    try {
      await axios.delete(
        `${baseurl}/list/${list_id}`,
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
  addTaskToList = async (list_id:string, task_id: string) => {
    try {
      await axios.post(
        `${baseurl}/list/${list_id}/task/${task_id}`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return true
    } catch (error) {
      console.log(error)
    }
  }
  removeTaskFromList = async (list_id:string, task_id: string) => {
    try {
      await axios.delete(
        `${baseurl}/list/${list_id}/task/${task_id}`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return true
    } catch (error) {
      console.log(error)
    }
  }
}
