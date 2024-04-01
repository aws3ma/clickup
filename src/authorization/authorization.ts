import axios from 'axios'
import { baseurl } from '../baseurl'
import { GetAccessTokenResponse } from './models/accessToken'
import { GetAuthorizedUserResponse } from './models/user'
import { GetAuthorizedTeamResponse } from './models/team'
export class Authorization {
  isAuthorized: boolean
  accessToken: string
  constructor(
    private readonly client_id: string,
    private readonly client_secret: string,
    private readonly code: string,
  ) {
    this.isAuthorized = false
    this.accessToken = ''
  }
  getAccessToken = async () => {
    try {
      const response: GetAccessTokenResponse = await axios.post(
        `${baseurl}/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${this.code}`,
      )
      this.accessToken = response.access_token
      this.isAuthorized = true
      return response
    } catch (e) {
      console.log(e)
    }
  }
  getAuthorizedUser = async () => {
    try {
      if (!this.isAuthorized) {
        console.log('please authenticate first')
        return
      }
      const response: GetAuthorizedUserResponse = await axios.get(
        `${baseurl}/user`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (e) {
      console.log(e)
    }
  }
  getAuthorizedTeam = async () => {
    try {
      const response: GetAuthorizedTeamResponse =await axios.get(
        `${baseurl}/team`,
        {
          headers: {
            Authorization: this.accessToken,
          },
        },
      )
      return response
    } catch (error) {
      console.log(error);
      
    }
  }
}
