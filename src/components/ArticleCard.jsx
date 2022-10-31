import React from 'react'

const ArticleCard = ({ article }) => {
  return ( <>
    <div className='articleContainer'>
      <p className='title'key={article.title}>{article.title}</p>
      <p className='topic' key={article.topic}>Topic: {article.topic}</p>
    </div>
  </>
  );
}

export default ArticleCard