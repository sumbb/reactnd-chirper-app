import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log('Tweet-ids', this.props)
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                   {this.props.tweetsIds.map((id) => 
                    <li key={id}>
                        <div>TWEET ID : {id}</div>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweetsIds : Object.keys(tweets)
    }
}

export default connect(mapStateToProps)(Dashboard)