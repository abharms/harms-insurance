import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Copy() {

    return (
        <>
            <div style={{ marginBottom: 30 + 'rem' }} className="relative grid gap-4 grid-cols-5 flex bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 h-max">
                <div className="mt-10 xl:mt-0 col-start-2 col-span-3">
                    <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1800" className='text-xl'>

                        <p className='mt-4'>At Harms Insurance Agency, we are committed to protecting your privacy as a visitor to this
                            Web site and as our customer. To our visitors and to our customers, we offer this pledge:
                        </p>
                        <p className="mt-10">
                            Harms Insurance Agency is the owner of the information, which may be collected on this Web
                            site. We will not sell, disseminate, disclose, trade, transmit, transfer, share, lease or rent any
                            personally identifiable information to any third party not specifically authorized by you to
                            receive your information except as we have disclosed to you in this Privacy Policy.
                        </p>
                        <h3 className="mt-10 font-bold text-blue-600">Information Collection</h3>
                        <p>
                            We will ask you to provide your personal information to us when you enroll for coverage and
                            when you purchase an insurance policy from us. We will also ask you to provide your personal
                            information to us when you send e-mail to us from this Web site. When you enroll for an
                            insurance policy at Harms Insurance Agency, we will ask you to provide your name, home
                            address, mailing address, telephone number and e-mail address. This information will be
                            provided to the insurance company when you purchase an insurance policy so they can
                            establish you as a policyholder. We will maintain a record of your information at the office of
                            Harms Insurance Agency so we can provide you with policyholder service. Each agency
                            employee has been instructed on maintaining the privacy of each customer and the importance
                            of protecting the customer’s personal information.
                        </p>
                        <p className="mt-10">
                            When you purchase an insurance policy from Harms Insurance Agency, you may pay the
                            premiums with your credit card or personal check. If you use your credit card to pay the
                            premium, your credit card information is deleted from our records after your purchase has
                            been authorized. A transaction number will be provided to you on a receipt. You may use this
                            transaction number as a reference to the credit card purchase. We do not keep a record of your
                            credit card information.
                        </p>
                        <p className="mt-10">
                            When you send us e-mail from this Web site, you will provide us with certain personally
                            identifiable information including your e-mail address.
                        </p>
                        <h3 className="mt-10 font-bold text-blue-600">Cookies</h3>
                        <p>
                            A cookie is a piece of data that is stored on a visitor’s hard drive while they are visiting this Web
                            site. We may utilize a short-lived form of cookie when you visit this site. At Harms Insurance
                            Agency, a cookie is only used to identify one unique visitor from another visitor during a
                            particular session. A session is the period of active site-use while that unique visitor is linked to
                            our server. We may use cookie technology during a session as a tool to carry forward your input
                            information during the enrollment process. This enables the visitor to input their information
                            once and have the information appear later during the enrollment process. No personally
                            identifiable information is stored on the cookie. The cookie expires and is deleted from the
                            visitor’s computer as soon as they close their browser or if they are not actively browsing our
                            Web site for more than 20 minutes. Should a previous visitor to our Web site return for a new
                            session, they will be issued a new cookie and in no way will they be recognized as a visitor from
                            a previous visit or session.
                        </p>
                        <h3 className="mt-10 font-bold text-blue-600">Third Party Links</h3>
                        <p>
                            This Web site may contain links to third party Web sites that are not controlled by Harms
                            Insurance Agency. These third party links are made available to you as a convenience and you
                            agree to use these links at your own risk. Please be aware that Harms Insurance Agency is not
                            responsible for the content of third party Web sites linked to Harms Insurance Agency, nor are
                            we responsible for the privacy policy or practices of third party Web sites linked to Harms
                            Insurance Agency. Our Privacy Policy only applies to information we collect from you while you
                            are at and while you are actively in a session with Harms Insurance Agency. If you should link to
                            a third party Web site from Harms Insurance Agency, we strongly encourage you to review and
                            become familiar with that Web site’s privacy policy.
                        </p>
                        <h3 className="mt-10 font-bold text-blue-600">Changes In Our Privacy Policy</h3>
                        <p> 
                            We reserve the right to change this Privacy Policy without providing you with advance notice of
                            our intent to make the changes.
                        </p>
                    </AnimatedOnScroll>
                </div>
            </div>
        </>

    )
}

export default Copy