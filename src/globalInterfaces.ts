export interface ClickupError {
  err: string
  ECODE: string
}

export interface AccessTokenBase {
  access_token : string
  token_type: string
}

export interface ClickupApiAccessToken extends AccessTokenBase {}