import React from 'react'
import Product from '../components/Product'


const Home = () => {
    return (
        <div>
            <h2 className='heading' style={{color:'white'}}>Online Shopping Zone</h2>
            <section>
                <Product></Product>
            </section>
        </div>
    )
}

export default Home
