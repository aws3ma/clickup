import axios, { AxiosResponse } from 'axios'
import { baseurl } from '../baseurl'
import { GetSpaceResponse } from './models/getSpace'
import { GetSpacesResponse } from './models/getSpaces'
import { CreateSpaceInput } from './models/createSpace'
import { UpdateSpaceInput } from './models/updateSpace'
import { CreateSpaceResponse } from './models/createSpace'
import { UpdateSpaceResponse } from './models/updateSpace'
import { ClickupApiAccessToken, ClickupError } from '../globalInterfaces'
import { AxiosError } from 'axios'
export class Spaces {
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
  getSpaces = async (teamId: string | number, archived: boolean = false): Promise<
  AxiosResponse<GetSpacesResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.get<GetSpacesResponse>(
        `/team/${teamId}/space?archived=${archived}`,
      )
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  createSpace = async (teamId: string, data: CreateSpaceInput): Promise<
  AxiosResponse<CreateSpaceResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.post<CreateSpaceResponse>(`/team/${teamId}/space`, data)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  getSpace = async (space_id: string): Promise<
  AxiosResponse<GetSpaceResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.get<GetSpaceResponse>(`/space/${space_id}`)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  updateSpace = async (space_id: string, data: UpdateSpaceInput): Promise<
  AxiosResponse<UpdateSpaceResponse> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.put<UpdateSpaceResponse>(`/space/${space_id}`, data)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  deleteSpace = async (space_id: string): Promise<
  AxiosResponse<any> | AxiosError<ClickupError> | undefined
  > => {
    try {
      const response = await axios.delete(`/space/${space_id}`)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
}
