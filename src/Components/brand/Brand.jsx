import React from 'react'
import './brand.css'
import { google,  slack,  atlassian, dropbox, shopify } from './imports.js'

const Brand = () => {
  return (
    <div className='gpt3_brands section_padding'>
      <img src={ google } alt='google'/>
      <img src={ slack } alt='slack'/>
      <img src={ atlassian } alt='atlassian'/>
      <img src={ dropbox } alt='dropbox'/>
      <img src={ shopify } alt='shopify'/>
    </div>
  )
}

export default Brand