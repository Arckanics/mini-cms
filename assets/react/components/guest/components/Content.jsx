import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import htmlReactParser from "html-react-parser"
import { useLocation } from 'react-router-dom';


const Content = () => {
  const articles = useSelector(state => state.fetcher.articles)
  const location = useLocation()
  const parse = htmlReactParser
  const path = location.pathname
  const [ref, setRef] = useState(null)
  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    if (ref) {
      const { scrollHeight } = ref
      setOverflow(scrollHeight > ref.clientHeight ? true : false)
    }
  }, [ref])

  return (
    <section id='content' 
      className={(!articles ? 'empty': '') + (overflow ? ' scrollable' : '')}
      ref={node => (node ? setRef(node) : null)} >
      <section className="wrapper">
      {
        articles
        ? articles.map((a,k) => <article key={k} className='article'>
          <h3 className='article-title'>{a.Title}</h3>
          <hr className='separator'/>
          <div className='article-content'>
            { parse(a.Content) }
          </div>
        </article>)
        : <div className='message'>
          <h1 className='code' >404</h1>
          <p className='desc'>la page <span className='variable'>" {path} "</span> est introuvable...</p>
        </div>
      }
      </section>

    </section>
  )
}

export default Content