import { saveLikeToggle } from '../utils/api'


export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function toggleTweet({id, hasLiked, authedUser}) {
    return {
        type: TOGGLE_TWEET,
        id,
        hasLiked,
        authedUser
    }
}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
                .catch(( error )=> {
                    console.warn('Error in handleToggleTweet : ', error)
                    // Should the hasLiked property toggled first, before dispatching
                    dispatch(toggleTweet(info))
                    return alert('The was an error liking/unliking the tweet. Try again.')
                })
    }
}

