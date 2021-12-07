import React from 'react'
import Header from './Header'

import './layout.css'

function BaseLayout({children}) {
    return (
        <>
        <Header />

        <br />

        {children}
        </>
    )
}

export default BaseLayout
