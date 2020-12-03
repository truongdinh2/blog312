import { Link } from 'gatsby'
import React from 'react'
import Layout from './layout'

export default function About() {
    return (
        <div>
            <Layout>
                <iframe width="893" height="502" style={{paddingTop: '70px'}}
                src="https://www.youtube.com/embed/Zph7YXfjMhg" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </Layout>
        </div>
    )
}
