import Navbar from "../../shared/Navbar"

function ProductsHeader() {
    return (
        <div id="wrapper" className='about-header-bg h-max pb-32'>
            <div className="relative grid lg:grid-cols-6 gap-4 place-content-evenly flex relative z-10">
                <Navbar />
                <div className='lg:col-start-2 col-span-4 text-center mt-48'>
                    <h1 className='mt-28 md:mt-0 text-7xl md:text-8xl text-white'>Products</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductsHeader