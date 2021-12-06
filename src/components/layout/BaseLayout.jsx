import React from 'react'
import Header from './Header'

import './styles.css'

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
