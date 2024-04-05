import axios, { AxiosError, AxiosResponse } from 'axios'
import { baseurl } from '../baseurl'
import { GetFoldersResponse } from './models/getFolders'
import { CreateFolderResponse, CreateFolderInput } from './models/createFolder'
import { UpdateFolderInput, UpdateFolderResponse } from './models/updateFolder'
import { GetFolderResponse } from './models/getfolder'
import { ClickupApiAccessToken, ClickupError } from '../globalInterfaces'
export class Folders {
  constructor(
    private readonly accessToken: ClickupApiAccessToken,
    private spaceId?: string | number,
    private folderId?: string | number,
  ) {
    axios.defaults.baseURL = baseurl
    axios.interceptors.request.use(config => {
      if (this.accessToken.access_token !== '') {
        config.headers.Authorization = `${this.accessToken.token_type} ${this.accessToken.access_token}`,
        config.headers['Content-Type'] = 'application/json'
      }
      return config
    })
  }
  getFolders = async (
    spaceId?: string | number,
    archived: boolean = false,
  ): Promise<
    AxiosResponse<GetFoldersResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.get<GetFoldersResponse>(
        `/space/${spaceId || this.spaceId}/folder?archived=${archived}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  createFolder = async (
    data: CreateFolderInput,
    spaceId?: string | number,
  ): Promise<
    AxiosResponse<CreateFolderResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.post<CreateFolderResponse>(
        `/space/${spaceId || this.spaceId}/folder`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  getFolder = async (
    folderId?: string | number,
  ): Promise<
    AxiosResponse<GetFolderResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.get<GetFolderResponse>(
        `/folder/${folderId || this.folderId}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  updateFolder = async (
    data: UpdateFolderInput,
    folderId?: string | number,
  ): Promise<
    AxiosResponse<UpdateFolderResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.put<UpdateFolderResponse>(
        `/folder/${folderId || this.folderId}`,
        data,
      )
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  deleteFolder = async (
    folderId?: string | number,
  ): Promise<AxiosResponse<any> | AxiosError<ClickupError> | undefined> => {
    try {
      const response = await axios.delete(
        `/folder/${folderId || this.folderId}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
}
