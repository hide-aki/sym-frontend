import React from 'react'

import back from 'assets/img/back.png'

const Journey = () => {
    return (
        <div className="journey d-flex justify-content-center align-items-center">
            <img src={back} alt="back" className="journey__back" />
            <div className="marquee">
              <div>
                <h1 className="journey__titleleft">Discover Your Products</h1>
                <h1 className="journey__titleright">Discover Your Products</h1>
              </div>
            </div>
        </div>
    )
}

export default Journey
