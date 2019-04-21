import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHENTED_ID = 'tylermcginnis'

export function handleIntialData() {
    return (dispatch) => {
        return getInitialData()
                .then(({ users, tweets }) => {
                    dispatch(receiveUsers(users))
                    dispatch(receiveTweets(tweets))
                    dispatch(setAuthedUser(AUTHENTED_ID))
                })
    }

}