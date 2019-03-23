import React from 'react'
import { Helmet } from 'react-helmet'
import pkg from '../package.json'

export default props =>
  <Helmet>
    <title>System UI</title>
    <meta name='description' content={pkg.description} />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content='@jxnblk' />
    <meta name='twitter:title' content='System UI' />
    <meta name='twitter:image' content='https://system-ui.com/card.png' />
    <meta name='twitter:description' content={pkg.description} />
  </Helmet>
