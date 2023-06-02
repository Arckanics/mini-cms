import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import htmlReactParser from "html-react-parser"


const Content = () => {
  const articles = useSelector(state => state.fetcher.articles)
  const parse = htmlReactParser
  const [overflow, setOverflow] = useState(false)

  const overflower = ref => {
    const { scrollHeight } = ref
    const { height } = ref.getBoundingClientRect()
    setOverflow((scrollHeight > height))
  }

  return (
    <section id='content' 
      className={overflow && 'scrollable'}
      ref={node => (node ? overflower(node) : null)} >
      <section className="wrapper">
      {
        articles
        && articles.map((a,k) => <article key={k} className='article'>
          <h3 className='article-title'>{a.Title}</h3>
          <hr className='separator'/>
          <div className='article-content'>
            { parse(a.Content) }
          </div>
        </article>)
      }
      </section>

    </section>
  )
}

export default Content