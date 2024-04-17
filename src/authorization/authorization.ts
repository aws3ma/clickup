import xior, {XiorError, XiorResponse} from 'xior'
import { baseurl } from '../baseurl'
import { GetAccessTokenResponse } from './models/getAccessToken'
import { GetAuthorizedUserResponse } from './models/getAuthorizedUser'
import { GetAuthorizedTeamResponse } from './models/getAuthorizedTeam'
import { ClickupApiAccessToken, ClickupError } from '../globalInterfaces'
export class Authorization {
  isAuthorized: boolean
  accessToken: ClickupApiAccessToken
  constructor(
    private readonly client_id: string,
    private readonly client_secret: string,
    private readonly code: string,
  ) {
    this.isAuthorized = false
    this.accessToken = { access_token: '', token_type: 'Bearer' }
    
    xior.defaults.baseURL = baseurl
    xior.interceptors.request.use(config => {
      if (this.accessToken.access_token !== '') {
        config.headers.Authorization = `${this.accessToken.token_type} ${this.accessToken.access_token}`
      }
      return config
    })
  }
  getAccessToken = async (): Promise<
    XiorResponse<GetAccessTokenResponse> | XiorError | undefined
  > => {
    try {
      const response = await xior.post<GetAccessTokenResponse>(
        `/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${this.code}`,
      )
      this.accessToken = response.data
      // this.isAuthorized = true
      return response
    } catch (e: any) {
      if (e instanceof XiorError) return e
      console.log(e)
    }
  }
  getAuthorizedUser = async (): Promise<
    | XiorResponse<GetAuthorizedUserResponse>
    | XiorError
    | undefined
  > => {
    try {
      const response = await xior.get<GetAuthorizedUserResponse>(`/user`)
      return response
    } catch (error: any) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  getAuthorizedTeam = async (): Promise<
    | XiorResponse<GetAuthorizedTeamResponse>
    | XiorError
    | undefined
  > => {
    try {
      const response = await xior.get<GetAuthorizedTeamResponse>(`/team`)
      return response
    } catch (error) {
      if (error instanceof XiorError) return error
      console.log(error)
    }
  }
  setAccessToken = (data: GetAccessTokenResponse): GetAccessTokenResponse => {
    this.accessToken = data
    return this.accessToken
  }
}
