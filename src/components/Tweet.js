import React from 'react'
import {connect} from 'react-redux'
import {formatTweet, formatDate} from '../utils/helpers.js'


class Tweet extends React.Component{
  render(){

    const {tweet} = this.props


    if(tweet === null){
      return <p>HUMM, does not exist</p>
    }

    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
    } = tweet

    return(
      <div className="tweet">
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className="avatar"/>

        <div className="tweet-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <div className="replaying-to">
              replaying to @{parent.author}
            </div>
          )}
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedId, tweets, users}, {id}){
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replayingTo] : null


  return {
    authedId,
    tweet: tweet ?
      formatTweet(tweet, users[tweet.author], authedId, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)
