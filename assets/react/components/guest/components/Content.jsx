import React from 'react'
import { useSelector } from 'react-redux';
import htmlReactParser from "html-react-parser"


const Content = () => {
  const articles = useSelector(state => state.fetcher.articles)

  const parse = htmlReactParser

  return (
    <section id='content'>
      {
        articles
        && articles.map((a,k) => <article key={k} className='content-article'>
          <h3 className='article-title'>{a.Title}</h3>
          { parse(a.Content) }
        </article>)
      }

    </section>
  )
}

export default Content