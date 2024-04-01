import axios from 'axios'
import { baseurl } from '../baseurl'
import { GetFoldersResponse } from './models/getFoldersResponse'
import { CreateFolderResponse } from './models/createFolderResponse'
import { UpdateFolderInput } from './models/updateFolderInput'
import { CreateFolderInput } from './models/createFolderInput'
import { GetFolderResponse } from './models/getfolderResponse'
import { UpdateFolderResponse } from './models/updateFolderResponse'
export class Folders {
  constructor(private readonly accessToken: string) {}
  getFolders = async (space_id: string, archived: boolean = false) => {
    try {
      const response: GetFoldersResponse = await axios.get(
        `${baseurl}/space/${space_id}/folder?archived=${archived}`,
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
  createFolder = async (
    space_id: string,
    data: CreateFolderInput,
  ) => {
    try {
      const response: CreateFolderResponse = await axios.post(
        `${baseurl}/space/${space_id}/folder`,
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
  getFolder = async (folder_id: string) => {
    try {
      const response: GetFolderResponse = await axios.get(
        `${baseurl}/folder/${folder_id}`,
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
  updateFolder = async (folder_id: string, data: UpdateFolderInput) => {
    try {
      const response: UpdateFolderResponse = await axios.put(
        `${baseurl}/folder/${folder_id}`,
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
  deleteFolder = async (folder_id: string) => {
    try {
      await axios.delete(
        `${baseurl}/folder/${folder_id}`,
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
