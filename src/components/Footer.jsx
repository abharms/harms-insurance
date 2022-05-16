import logo from '../../src/assets/logo-white.png';

function Footer() {
    return (
        <>
            <div className="grid grid-cols-12  place-content-center bg-zinc-700 py-36 ">
                <div className='col-start-2 col-span-2 text-center'>
                    <img src={logo} height="50px" width="300px" />
                </div>
                <div className='col-start-4 col-span-6 text-center px-60'>
                    <p className='text-xl text-gray-500'>Need help? Call us</p>
                    <p className='text-3xl text-blue-600 mb-5 mt-5'>580-772-2324</p>
                    <p className='text-xl text-white'>1100 Main St, Suite 300</p>
                    <p className='text-xl text-white'>Weatherford, OK 73096</p>
                    <p className='text-xl text-white'>Fax: 580-772-2321</p>
                    <p className='text-xl text-white'>Email: <a href="mailto:agency@harmsinsuranceok.com">agency@harmsinsuranceok.com</a></p>
                </div>
                <div className='col-start-10 text-center mt-10'>
                    <i className="fa-brands fa-facebook-f mr-5 text-3xl text-white"></i>
                    <i className="fa-brands fa-instagram text-3xl text-white"></i>
                </div>
                
            </div>
            <hr className='border-gray-500'></hr>
            <div className='grid grid-cols-12 text-center py-10 bg-zinc-700'>
                <div className="col-start-3 col-span-8 text-xl text-gray-500">© {new Date().getFullYear()} Harms Insurance Agency, Inc. | All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Footer