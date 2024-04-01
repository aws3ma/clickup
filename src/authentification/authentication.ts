export class Authentication {
  constructor(private client_id:string, private redirect_uri:string) {

  }
  getAuthenticationUrl = () => {
    return `https://app.clickup.com/api?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}`
  }
  setClietId = (clientId:string) => {
    this.client_id=clientId
  }
  setRedirectUri = (redirectUri: string) => {
    this.redirect_uri=redirectUri
  }
}