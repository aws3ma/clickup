import { XiorError } from 'xior'
import { Folders } from 'clickupapis'
const folders = new Folders({
  access_token:
    '62612886_0e5ea30f4425e9847c091ebe1d0dec9869e0a1605fcb54a084df42c7cf040f60',
  token_type: 'Bearer',
},90151207363)
const fn = async () => {
  try {
    const resp = await folders.createFolder({
      name: 'folder from node package',
    })

    if (resp === undefined) {
      throw new Error('Resp is undefined')
    }
    if (resp instanceof XiorError) {
      console.log(resp.response?.data)
      throw new Error('axios error')
    }
    console.log(resp.data)
  } catch (error) {
    console.log(error)
  }
}
fn()
