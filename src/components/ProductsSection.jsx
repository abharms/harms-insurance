import React from 'react'
import { Link } from 'react-router-dom'

function ProductsSection() {
  return (
    <>
        <div className="relative grid grid-cols-12  place-content-evenly flex bg-white p-14">
            <div className='col-start-2  text-9xl text-blue-600 font-semibold'>
                products<span className='text-black'>.</span>
            </div>
            <div className='col-start-8 col-end-12 text-3xl'>
                <div className=''>
                    <div>
                        <i className="fa-solid fa-house mr-8"></i>
                        <span>Home and Auto</span>
                    </div>
                    <div className='mt-5'>
                        <i className="fa-solid fa-tractor mr-8"></i>
                        <span>Farm</span>
                    </div>
                    <div className='mt-5'>
                        <i className="fa-solid fa-laptop mr-8"></i>
                        <span>Small Business</span>
                    </div>
                    <div className='mt-5'>
                        <i className="fa-solid fa-people-group mr-8"></i>
                        <span>Life and Health</span>
                    </div>
                </div>
            </div>
            <div className='col-start-12 place-self-center'>
                <Link className='link link-accent text-2xl' to="/products">Much more</Link>
            </div>
        </div>
    </>
  )
}

export default ProductsSection