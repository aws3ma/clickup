import axios from 'axios'
import { baseurl } from '../baseurl'
import { GetAuthorizedTeamsWorkspacesResponse } from './models/getAuthorizedTeamsWorkspacesResponse'
import { GetWorkspaceSeatsResponse } from './models/getWorkspaceSeatsResponse'
export class TeamsWorkspaces {
  constructor(private readonly accessToken: string, private team_id?:string) {}
  setTeamId = (teamId: string) => {
    this.team_id=teamId
  }
  getAuthorizedTeamsWorkspaces = async () => {
    try {
      const response: GetAuthorizedTeamsWorkspacesResponse = await axios.get(
        `${baseurl}/team`,
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
  /**
   * 
   * @param team_id optional if team_id is setted using setTeamId method
   * @returns workspace seats
   */
  getWorkspaceSeats = async (team_id?: string) => {
    try {
      const response: GetWorkspaceSeatsResponse = await axios.get(
        `${baseurl}/team/${team_id || this.team_id}/seats`,
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
  /**
   * 
   * @param team_id optional if team_id is setted using setTeamId method
   * @returns workspace plan
   */
  getWorkspacePlan = async (team_id?: string) => {
    try {
      const response: GetWorkspaceSeatsResponse = await axios.get(
        `${baseurl}/team/${team_id || this.team_id}/plan`,
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
}
