import axios, { AxiosResponse } from 'axios'
import { baseurl } from '../baseurl'
import { GetAuthorizedTeamsWorkspacesResponse } from './models/getAuthorizedTeamsWorkspaces'
import { GetWorkspaceSeatsResponse } from './models/getWorkspaceSeats'
import { ClickupApiAccessToken, ClickupError } from '../globalInterfaces'
import { AxiosError } from 'axios'
import { GetWorkspacePlanResponse } from './models/getWorkspacePlan'
export class TeamsWorkspaces {
  constructor(private readonly accessToken: ClickupApiAccessToken, private teamId?:string | number) {
    axios.defaults.baseURL = baseurl
    axios.interceptors.request.use(config => {
      if (this.accessToken.access_token !== '') {
        ;(config.headers.Authorization = `${this.accessToken.token_type} ${this.accessToken.access_token}`),
          (config.headers['Content-Type'] = 'application/json')
      }
      return config
    })
  }
  setTeamId = (teamId: string | number): void => {
    this.teamId=teamId
  }
  getAuthorizedTeamsWorkspaces = async (): Promise<
  AxiosResponse<GetAuthorizedTeamsWorkspacesResponse> | AxiosError<ClickupError> | undefined
> => {
    try {
      const response = await axios.get<GetAuthorizedTeamsWorkspacesResponse>(
        `/team`)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  /**
   * 
   * @param teamId optional if teamId is setted using setTeamId method
   * @returns workspace seats
   */
  getWorkspaceSeats = async (teamId?: string | number): Promise<
  AxiosResponse<GetWorkspaceSeatsResponse> | AxiosError<ClickupError> | undefined
> => {
    try {
      const response = await axios.get<GetWorkspaceSeatsResponse>(
        `/team/${teamId || this.teamId}/seats`)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
  /**
   * 
   * @param teamId optional if teamId is setted using setTeamId method
   * @returns workspace plan
   */
  getWorkspacePlan = async (teamId?: string | number): Promise<
  AxiosResponse<GetWorkspacePlanResponse> | AxiosError<ClickupError> | undefined
> => {
    try {
      const response = await axios.get<GetWorkspacePlanResponse>(
        `/team/${teamId || this.teamId}/plan`)
      return response
    } catch (error: any) {
      if (error instanceof AxiosError) return error
      console.log(error)
    }
  }
}
