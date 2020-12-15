import React from 'react'
import Layout from './layout'

export default function About() {
    return (
        <div>
            <Layout>
                <iframe width="893" height="502" style={{paddingTop: '70px'}}
                src="https://www.youtube.com/embed/Zph7YXfjMhg" 
                frameborder="0" 
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </Layout>
        </div>
    )
}
