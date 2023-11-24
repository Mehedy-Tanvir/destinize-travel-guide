import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F7F8FC]">
      <div className="max-w-[1400px] mx-auto">
        <footer className="p-10 footer text-base-content">
          <aside>
            <div className="flex gap-[10px] items-center">
              <img src="/logo.png" alt="" />
              <p className="text-[#222] text-[24px] font-bold">Destinize</p>
            </div>
            <p className="text-[#666] hidden lg:block leading-6 text-[16px] font-medium mt-[24px]">
              Book your trip in minute, get full <br />
              Control for much longer.
            </p>
            <p className="text-[#666] mx-w-[256px] lg:hidden leading-6 text-[16px] font-medium mt-[24px]">
              Book your trip in minute, get full Control for much longer.
            </p>
            <div className="flex justify-center items-center gap-[10px]">
              <Link to="https://www.facebook.com/">
                <img src="/fb.svg" alt="" />
              </Link>
              <Link to="https://www.instagram.com/">
                <div className="bg-[#4475F2] flex justify-center items-center rounded-[50%] w-[40px] h-[40px] drop-shadow-lg">
                  <img src="/insta.svg" alt="" />
                </div>
              </Link>
              <Link to="https://twitter.com/">
                <img src="/twitter.svg" alt="" />
              </Link>
            </div>
          </aside>
          <nav>
            <header className="mb-[16px] text-[#222] text-[18px] font-semibold">
              Company
            </header>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              About us
            </a>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              Jobs
            </a>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              Press kit
            </a>
          </nav>
          <nav>
            <header className="mb-[16px] text-[#222] text-[18px] font-semibold">
              Legal
            </header>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              Terms of use
            </a>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              Privacy policy
            </a>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              Cookie policy
            </a>
          </nav>
          <nav>
            <header className="mb-[16px] text-[#222] text-[18px] font-semibold">
              Contact
            </header>
            <a className="link link-hover max-w-[256px] text-[#666] font-normal text-[18px]">
              123 Travel Street, Wanderlust City, Adventure Country
            </a>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              +1 (555) 123-4567
            </a>
            <a className="link link-hover text-[#666] font-normal text-[18px]">
              info@destinize.com
            </a>
          </nav>
        </footer>
        <hr className="w-[75%] mx-auto border border-[#9966668F]" />
        <footer className="rounded footer footer-center text-base-content">
          <aside>
            <p className="text-[#222] max-w-[300px] pb-10 text-[16px] font-medium mt-[16px]">
              Copyright © 2023 - All right reserved by Destinize
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
