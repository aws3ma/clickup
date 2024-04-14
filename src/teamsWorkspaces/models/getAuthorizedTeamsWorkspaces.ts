export interface GetAuthorizedTeamsWorkspacesResponse {
  teams: Team[]
}

export interface Team {
  id: string
  name: string
  color: string
  avatar: any
  members: Member[]
}

export interface Member {
  user: User
  invited_by?: InvitedBy
}

export interface User {
  id: number
  username: string
  email: string
  color: string
  profilePicture: any
  initials: string
  role: number
  custom_role: any
  last_active: string
  date_joined: string
  date_invited: string
}

export interface InvitedBy {
  id: number
  username: string
  color: string
  email: string
  initials: string
  profilePicture: any
}