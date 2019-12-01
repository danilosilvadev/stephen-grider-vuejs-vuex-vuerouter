import qs from 'qs'
import {
  KEYS
} from '../keys'

export default {
  login() {
    const queryString = {
      client_id: KEYS.CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${KEYS.ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
  }
}