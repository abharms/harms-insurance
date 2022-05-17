import logo from '../../src/assets/logo.png';

function Footer() {
    return (
        <footer>
            
            <div className="grid grid-cols-12  place-content-center bg-white py-24 bg-gray-50">
                <div className='col-start-2 col-span-2 text-left'>
                    <img src={logo}  alt="logo" />
                    <div className='mt-5'>

                    </div>
                    <span>© {new Date().getFullYear()} All Rights Reserved. </span><br/>
                    <span className='text-sm'>Privacy Policy</span>
                </div>
                <div className='col-start-4 col-span-6 text-center '>
                    <p className='text-3xl text-blue-600 mb-5'>580-772-2324</p>
                    <p className='text-xl'>1100 Main St, Suite 300</p>
                    <p className='text-xl'>Weatherford, OK 73096</p>
                    <p className='text-xl'>Fax: 580-772-2321</p>
                    <p className='text-xl'>Email: <a href="mailto:agency@harmsinsuranceok.com">agency@harmsinsuranceok.com</a></p>
                </div>
                <div className='col-start-10 text-center'>
                    <i className="fa-brands fa-facebook-f mr-5 text-3xl"></i>
                    <i className="fa-brands fa-instagram text-3xl"></i>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer