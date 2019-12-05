import React from 'react'

import Introduction from 'components/Introduction'
import Ancestral from 'components/Ancestral'
import Ingredients from 'components/Ingredients'
import Science from 'components/Science'
import Together from 'components/Together'
import Journey from 'components/Journey'
import Symbiome from 'components/Symbiome'

const Home = () => {
    return (
        <div>
            <Introduction />
            <Ancestral />
            <Ingredients />
            <Science />
            <Together />
            <Journey />
            <Symbiome />
        </div>
    )
}

export default Home
