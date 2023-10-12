import logo from "../../src/assets/logo.png";
import trustedChoiceLogo from "../../src/assets/tc_logo.jpg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const onPrivacyPolicyClick = () => {
    navigate("/privacy-policy");
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-12 bg-white py-24 bg-gray-50">
        <div className="md:col-start-2 md:col-span-2 mb-10">
          <a onClick={() => onLogoClick()} className="cursor-pointer">
            <img src={logo} alt="logo" className="w-1/4 md:w-max m-auto" />
          </a>
          <div className="text-md text-center mt-5">
            <span>© {new Date().getFullYear()} All Rights Reserved. </span>
            <br />
            <a
              onClick={() => onPrivacyPolicyClick()}
              className="text-sm cursor-pointer">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="md:col-start-4 md:col-span-4 text-center mb-10">
          <p className="text-xl lg:text-2xl text-blue-600 mb-2">580-772-2324</p>
          <p className="text-md lg:text-lg">1100 Main St, Suite 300</p>
          <p className="text-md lg:text-lg">Weatherford, OK 73096</p>
          <p className="text-md lg:text-lg">Fax: 580-772-2321</p>
          <p className="text-md lg:text-lg">
            Email:{" "}
            <a href="mailto:agency@harmsinsuranceok.com">
              agency@harmsinsuranceok.com
            </a>
          </p>
        </div>
        <div className="md:col-start-8 md:col-span-2 text-center">
          <a
            href="https://www.trustedchoice.com/agency-profile/140541/harms-insurance-agency/"
            rel="noreferrer"
            target="_blank">
            <img
              src={trustedChoiceLogo}
              alt="trusted choice logo"
              className="w-1/4 md:w-max m-auto shadow-md"
            />
          </a>
        </div>
        <div className="md:col-start-10 md:col-span-2 text-center mt-8 md:mt-0">
          <a
            href="https://www.facebook.com/Harms-Insurance-Agency-Inc-102073558249643/reviews/?ref=page_internal"
            rel="noreferrer"
            target="_blank">
            <i className="fa-brands fa-facebook-f mr-5 text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/harmsinsuranceok/"
            rel="noreferrer"
            target="_blank">
            <i className="fa-brands fa-linkedin-in text-3xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
