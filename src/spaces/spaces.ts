import axios from 'axios'
import { baseurl } from '../baseurl'
import { GetSpacesResponse } from './models/getSpacesResponse'
import { CreateSpaceInput } from './models/createSpaceInput'
import { UpdateSpaceInput } from './models/updateSpaceInput'
import { CreateSpaceResponse } from './models/createSpaceResponse'
import { GetSpaceResponse } from './models/getSpaceResponse'
import { UpdateSpaceResponse } from './models/updateSpaceResponse'
export class Spaces {
  constructor(private readonly accessToken: string) {}
  getSpaces = async (team_id: string, archived: boolean = false) => {
    try {
      const response: GetSpacesResponse = await axios.get(
        `${baseurl}/team/${team_id}/space?archived=${archived}`,
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
  createSpace = async (
    team_id: string,
    data: CreateSpaceInput,
  ) => {
    try {
      const response: CreateSpaceResponse = await axios.post(
        `${baseurl}/team/${team_id}/space`,
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
  getSpace = async (space_id: string) => {
    try {
      const response: GetSpaceResponse = await axios.get(
        `${baseurl}/space/${space_id}`,
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
  updateSpace = async (space_id: string, data: UpdateSpaceInput) => {
    try {
      const response: UpdateSpaceResponse = await axios.put(
        `${baseurl}/space/${space_id}`,
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
  deleteSpace = async (space_id: string) => {
    try {
      await axios.delete(
        `${baseurl}/space/${space_id}`,
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
