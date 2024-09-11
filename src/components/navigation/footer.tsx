import Link from 'next/link';

import Icons from '../global/icons';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-t border-border px-6 pb-8 pt-16 lg:px-8 lg:pt-32">
      <div className="absolute -right-1/4 -top-1/3 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[14rem] lg:block"></div>
      <div className="absolute -left-1/4 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[14rem] lg:block"></div>

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="h-7 w-7" />
          </div>
          <p className="mt-4 text-start text-sm text-muted-foreground">
            A decentralized, sustainable energy trading platform.
          </p>
          <span className="mt-4 flex items-center text-sm text-neutral-200">
            Made in India with
            <Heart className="ml-1 h-3.5 w-3.5 fill-primary text-primary" />
          </span>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Product</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <h3 className="text-base font-medium text-white">Integrations</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-foreground"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full border-t border-border/40 pt-4 md:flex md:items-center md:justify-between md:pt-8">
        <p className="mt-8 text-sm text-muted-foreground md:mt-0">
          &copy; {new Date().getFullYear()} WattX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
