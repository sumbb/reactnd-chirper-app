import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
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

export function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        saveTweet({
            text,
            author : authedUser,
            replyingTo
        }).then((tweet) => dispatch(addTweet(tweet)))
          .then(() => dispatch(hideLoading()))

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

