"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
            Lumination <span className="company-title-color">India Infratech</span>
            </Link>
            <p className="max-w-xs mt-4 text-sm">
            </p>
            <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://github.com/" target="_blank">
                <GitHubIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.linkedin.com/in"
                target="_blank"
              >
                <LinkedInIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <TwitterIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
              >
                <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Meet the Team
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  History
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                {/* <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Coaching
                </Link> */}
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Company Review
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accounts Review
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact Us
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  FAQs
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 Lumination India Infratech - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
