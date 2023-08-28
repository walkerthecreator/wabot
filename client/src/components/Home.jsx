import React from 'react'

const Home = () => {
    return(
        <>
        <div className='home-div'>
        <h1>welcome to Wabot</h1>
        <p>your one and only tech store</p>
        </div>

        <div className='home-middle-div'>
            <h1 className='explore-product'>Explore Products</h1>
            <div className='home-buttons-group'>
                <button>Compare Prices</button>
                <button>Only on Wabot</button>
                <button>Shop By Brand<span></span></button>
                <button>Trending</button>
            </div>
        </div>
        </>
    )
}

export default Home;