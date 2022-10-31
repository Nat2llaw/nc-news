import React from 'react'
import TopicSearch from './TopicSearch'

const Topics = ({topic, setTopic}) => {
  return (
      <div>
          <h1>Topics</h1>
          <TopicSearch setTopic={setTopic} />
      </div>
  )
}

export default Topics