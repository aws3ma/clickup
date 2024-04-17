import { XiorError } from 'xior';
import { Authorization } from '../lib/cjs/authorization/authorization';

const autho = new Authorization(
  "T5LWWT6BEQS0XFM3UWJN3CA8FUUHSUOR",
  "WKTOS47N0XPYQQLF50LHALESER77ZILJKCWL9ESBGA66K438K5G3INEQVC2AN2R4",
  "X2TCNVKBBU5JXFY11TAXIBG05TAZQIXW"
);
const fn = async () => {
  try {
    // autho.setAccessToken({
    //   access_token:
    //     "62612886_0e5ea30f4425e9847c091ebe1d0dec9869e0a1605fcb54a084df42c7cf040f60",
    //   token_type: "Bearer",
    // });
    const resp = await autho.getAccessToken()

    if (resp === undefined) {
      throw new Error('Resp is undefined')
    }
    if (resp instanceof XiorError) {
      console.log(resp);
      throw new Error('xior error')
    }
    console.log(resp)
  } catch (e: any) {
    console.log(e);
  }
};
fn();