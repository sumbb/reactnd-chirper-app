import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
    state = {
        text : ''
    }

    handleChange(event) {
        const text = event.target.value

        this.setState(() => ({
            text
        }))

    }

    handleSubmit(event) {
        event.preventDefault()
        const { text } = this.state
        const { dispatch, id } = this.props
        dispatch(handleAddTweet(text, id))
        console.log('Added new tweet : ', text)
        this.setState(() => ({
            text: ''
        }))
    }

    render() {
        const { text } = this.state
        const tweetLeft = 280 - text.length

        return (
            <div>
               <h3 className='center'>Compose New Tweet</h3>
               <form className='new-tweet' onSubmit={(event) => this.handleSubmit(event)}>
                <textarea
                    placeholder="what's happening?"
                    value={text}
                    onChange={(event) => this.handleChange(event)}
                    className='textarea'
                    maxLength={280}
                ></textarea>
                {tweetLeft <= 100 && (
                    <div className='tweet-length'>
                      {tweetLeft}
                    </div>
                )}
                <button
                    className='btn'
                    type='submit'
                    disabled={text === ''}>
                Submit
                </button>
               </form>
               
            </div>
        )
    }
}

export default connect()(NewTweet)