function ContactForm() {
    return (
        <div style={{marginBottom: 34 + 'rem'}} className="py-40 bg-white relative z-10 h-max">
            <div className="mx-3.5 grid md:gap-6 grid-cols-1 md:grid-cols-12 place-content-evenly mb-10">
                <div className="md:col-span-6 md:col-start-2">
                    <p className="text-2xl semi-bold">Get in touch</p>
                    <form name="contact-form" method="POST" data-netlify="true" action="/form-submission">
                        <input type="hidden" name="form-name" value="contact-form" />
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full mt-6" />
                        <input type="text" placeholder="Email" name="email" className="input input-bordered w-full mt-12" />
                        <input type="text" placeholder="Subject" name="subject" className="input input-bordered w-full mt-12" />
                        <textarea className="textarea textarea-bordered mt-12 w-full h-40" name="message" placeholder="Type a message"></textarea>
                        <button type="submit" className="btn btn-primary w-full mt-6">Submit</button>
                    </form>
                    
                </div>
                <div className="md:col-start-8 text-center col-span-6 mt-20 md:mt-0">
                    <p className="text-2xl semi-bold">Weatherford Location</p>
                    <p className="text-xl text-gray-500 semi-bold">1100 E Main St. Ste 300</p>
                    <p className="text-xl text-gray-500 semi-bold">Weatherford, OK 73096</p>

                   
                    <p className="text-xl text-gray-500 semi-bold mt-6">Phone: 580-772-2324</p>
                    <p className="text-xl text-gray-500 semi-bold">Fax: 580-772-2324</p>

                    <p className="text-xl text-gray-500 semi-bold mt-6"><a href="mailto:agency@harmsinsuranceok.com">agency@harmsinsuranceok.com</a></p>
                    <p className="text-xl text-gray-500 semi-bold">Hours: 8-12, 1-5 M-F or by appointment</p>

                    <p className="text-2xl semi-bold mt-20">Enid Location</p>
                    <p className="text-xl text-gray-500 semi-bold">222 East Maple, Ste 200</p>
                    <p className="text-xl text-gray-500 semi-bold">Enid, OK 73701</p>

                   
                    <p className="text-xl text-gray-500 semi-bold mt-6">By appointment only</p>

                </div>
            </div>
        </div>
    )
}

export default ContactForm