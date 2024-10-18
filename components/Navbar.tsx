"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between mx-10 sm:mx-28 py-5 relative">
      <div className="flex items-center gap-2">
        <Image src={"Logo.svg"} width={40} height={40} alt="Logo" />
        <h1 className="text-xl font-semibold">Techype</h1>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-gray-800">
        <NavigationMenu className="flex items-center gap-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-blue-600 cursor-pointer">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:text-blue-600 cursor-pointer">
              Hire Engineers
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:text-blue-600 cursor-pointer">
              Portfolios
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:text-blue-600 cursor-pointer">
              Careers
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:text-blue-600 cursor-pointer">
              About Us
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:text-blue-600 cursor-pointer">
              Blogs
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Contact Us</Button>
      </div>
      <div className="lg:hidden ">
        {isOpen ? (
          <Image
            onClick={() => {
              setIsOpen(false);
            }}
            src={"icons/x.svg"}
            height={40}
            width={40}
            alt="close menu"
            className="cursor-pointer"
          />
        ) : (
          <Image
            onClick={() => {
              setIsOpen(true);
            }}
            src={"icons/menu.svg"}
            height={40}
            width={40}
            alt="open menu"
            className="cursor-pointer"
          />
        )}
        {isOpen && (
          <div className="absolute bg-white left-0 top-20">
            <ul className="list-none flex flex-col gap-2">
              <li>Services</li>
              <li>Hire Engineers</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>About Us</li>
              <li>Blog</li>
              <Button>Contact Us</Button>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
