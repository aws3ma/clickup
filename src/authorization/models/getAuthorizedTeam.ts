export type GetAuthorizedTeamResponse = {
  teams: Team[]
}

type Team = {
  id: string
  name: string
  color: string
  avatar: string | null
  members: Member[]
}

type Member = {
  user: User
  invited_by?: InvitedBy
}

type User = {
  id: number
  username: string
  email: string
  color: string
  profilePicture: string | null
  initials: string
  role: 3
  custom_role: null
  last_active: string
  date_joined: string
  date_invited: string
}

type InvitedBy = {
  id: number
  username: string
  color: string
  email: string
  initials: string
  profilePicture: string | null
}




