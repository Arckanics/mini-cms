import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import htmlReactParser from "html-react-parser"


const Content = () => {
  const articles = useSelector(state => state.fetcher.articles)
  const parse = htmlReactParser
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
      className={overflow ? 'scrollable' : null}
      ref={node => (node ? setRef(node) : null)} >
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