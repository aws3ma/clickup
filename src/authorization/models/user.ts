export type GetAuthorizedUserResponse = {
  "user" : User
}
type User = {
  "id": number,
  "username": string,
  "email": string,
  "color": string,
  "profilePicture": string | null,
  "initials": string,
  "week_start_day": string | null,
  "global_font_support": boolean,
  "timezone": string
}