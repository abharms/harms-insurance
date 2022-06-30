import logo from '../../src/assets/logo.png';

function Footer() {
    return (
        <footer>

            <div className="grid grid-cols-1 md:grid-cols-12 bg-white py-24 bg-gray-50">
                <div className='md:col-start-2 md:col-span-2 mb-10'>
                    <img src={logo} alt="logo" className='w-1/2 md:w-max m-auto' />
                    
                    <div className='text-md text-center mt-5'>
                        <span>© {new Date().getFullYear()} All Rights Reserved. </span><br />
                        <span className='text-sm'>Privacy Policy</span>
                    </div>

                </div>
                <div className='md:col-start-4 md:col-span-6 text-center mb-10'>
                    <p className='text-xl lg:text-2xl text-blue-600 mb-2'>580-772-2324</p>
                    <p className='text-md lg:text-lg'>1100 Main St, Suite 300</p>
                    <p className='text-md lg:text-lg'>Weatherford, OK 73096</p>
                    <p className='text-md lg:text-lg'>Fax: 580-772-2321</p>
                    <p className='text-md lg:text-lg'>Email: <a href="mailto:agency@harmsinsuranceok.com">agency@harmsinsuranceok.com</a></p>
                </div>
                <div className='md:col-start-10 md:col-span-2 text-center'>
                    <i className="fa-brands fa-facebook-f mr-5 text-3xl"></i>
                    <i className="fa-brands fa-twitter text-3xl"></i>
                </div>

            </div>
        </footer>
    )
}

export default Footer