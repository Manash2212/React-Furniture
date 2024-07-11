import { Link } from "react-router-dom";
// import Icons
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer font-primary w-full bg-gray-50">
      <div className="con1 flex items-center justify-between mx-auto py-10 max-sm:flex-col max-w-[80%] max-md:flex-col md:flex-col lg:flex-row ">
        <div className="left_center_both w-full flex flex-1 items-center justify-around max-sm:justify-between max-sm:pb-16   ">
          <div className="left ">
            <div className="content">
              <ul className="leading-8 ">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Press & Events</li>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Privacy & Policy</li>
                <li className="cursor-pointer">FAQs</li>
                <li className="cursor-pointer">Return & Exchange</li>
                <li className="cursor-pointer">Shipping Information</li>
              </ul>
            </div>
          </div>
          <div className="center">
            <ul className="leading-8">
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Track Your Order</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Gift Card</li>
              <li className="cursor-pointer">Newsletter</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">100% Authentic</li>
            </ul>
          </div>
        </div>
        <div className="right flex  flex-col items-start gap-6    max-sm:text-center  max-md:w-[80%] max-md:pt-10 md:flex-row md:pt-10 md:items-center sm:text-center md:text-start lg:flex-col max-md:mt-4 md:mt-6 lg:mt-[-30px]">
          <div className="child1 w-full ">
            <h2>Follow us :</h2>
            <div className="items flex items-center justify-start max-sm:justify-center sm:justify-center md:justify-start gap-4 text-2xl mt-4">
              <div className="item ">
                <Link to={"facebook"}>
                  <FaFacebook />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <AiFillTwitterCircle />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <FaPinterest />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <AiFillInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="child2 w-full mt-7">
            <h2>All payment modes accepted :</h2>
            <div className="items flex items-center justify-start gap-4 text-2xl mt-4">
              <div className="item">
                <Link to={"facebook"}>
                  <img
                    className="w-[48px] mr-4"
                    src="https://skin.darveys.com/assets/images/visa.png"
                    alt="visa"
                  />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <img
                    className="w-[48px] mr-4"
                    src="https://skin.darveys.com/assets/images/master-card.png"
                    alt="master-card"
                  />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <img
                    className="w-[48px] mr-4"
                    src="https://skin.darveys.com/assets/images/american-express.png"
                    alt="American-Express"
                  />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <img
                    className="w-[48px] mr-4"
                    src="https://skin.darveys.com/assets/images/net-banking.png"
                    alt="Net-Banking"
                  />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <img
                    className="w-[48px] mr-4"
                    src="https://skin.darveys.com/assets/images/emi.png"
                    alt="EMI"
                  />
                </Link>
              </div>
              <div className="item">
                <Link to={"facebook"}>
                  <img
                    className="w-[48px]"
                    src="https://skin.darveys.com/assets/images/cash-on-delivery.png"
                    alt="Cash-on-Delivery"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="con2 flex items-center justify-center py-4  border-t-slate-400 border-2 border-dotted bor">
        <h1 className="font-primary">Copyright @ 2024, Allrights Reserved </h1>
      </div>
    </div>
  );
};

export default Footer;
