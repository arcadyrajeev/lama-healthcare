"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import services from "@/data/services";

const Navbar = () => {
  const pathname = usePathname();

  const [servicesOpen, setServicesOpen] = useState(false);

  const [moreOpen, setMoreOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const moreDropdownRef = useRef<HTMLLIElement | null>(null);

  const formatServiceName = (slug: string) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const links = [
    { name: "Home", path: "/" },

    { name: "About", path: "/about" },
  ];

  const moreLinks = [
    {
      name: "Blog",
      path: "/blog",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }

      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="
        fixed z-50 w-full
        flex justify-center md:justify-between
        items-center subheading
        px-2 sm:px-4 md:px-10 lg:px-[7.5rem]
        py-4 
      "
    >
      {/* Logo */}
      <div className="hidden md:flex">
        <Link href="/" aria-label="Home">
          <Image src="/lamahc-logo1.svg" alt="Logo" width={160} height={160} />
        </Link>
      </div>

      {/* Navigation */}
      <ul
        className="
          flex gap-2 md:gap-4 lg:gap-4
          backdrop-blur-lg
          border border-white
          bg-neutral-300/20
           
          rounded-full
          p-[1vw] lg:p-1
        "
      >
        {/* Home */}
        {links.slice(0, 1).map((link) => {
          const active = isActive(link.path);

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                  block rounded-full
                  px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
                  text-[3.5vw] sm:text-xs md:text-md lg:text-base
                  transition-colors duration-200  
                  ${
                    active
                      ? "bg-accent text-white"
                      : "text-secondary-text hover:bg-accent hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* Services Dropdown */}
        <li
          ref={dropdownRef}
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            type="button"
            onClick={() => setServicesOpen((prev) => !prev)}
            className={`
              flex items-center gap-1
              rounded-full  
              px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
              text-[3.5vw] sm:text-xs md:text-md lg:text-base
             
              transition-colors duration-200
              ${
                pathname.startsWith("/services")
                  ? "bg-accent text-white"
                  : "text-secondary-text hover:bg-accent hover:text-white"
              }
            `}
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Services Dropdown */}
          <div
            className={`
              absolute top-[120%] -left-16
              w-[75vw] p-2 sm:w-[320px] md:w-[280px]
              rounded-2xl
              border border-neutral-200
              bg-white  
              shadow-2xl
              overflow-hidden
              transition-all duration-300
              ${
                servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }
            `}
          >
            <div className="flex flex-col">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setServicesOpen(false)}
                  className="
      px-5 md:px-4
      py-4 md:py-3
      text-lg md:text-sm
      leading-relaxed
      text-secondary-text
      rounded-lg
      hover:bg-neutral-200
      transition-colors
      border-b lg:border-0 border-neutral-200
      last:border-b-0
    "
                >
                  {formatServiceName(service.slug)}
                </Link>
              ))}
            </div>
          </div>
        </li>

        {/* About */}
        {links.slice(1).map((link) => {
          const active = isActive(link.path);

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                  block rounded-full
                  px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
                  text-[3.5vw] sm:text-xs md:text-md lg:text-base
                  transition-colors duration-200
                  ${
                    active
                      ? "bg-accent text-white"
                      : "text-secondary-text hover:bg-accent hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* More Dropdown */}
        <li
          ref={moreDropdownRef}
          className="relative"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button
            type="button"
            onClick={() => setMoreOpen((prev) => !prev)}
            className={`
              flex items-center gap-1
              rounded-full
              px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
              text-[3.5vw] sm:text-xs md:text-md lg:text-base
              
              transition-colors duration-200
              ${
                pathname.startsWith("/blog") || pathname === "/contact"
                  ? "bg-accent-dark text-white"
                  : "text-secondary-text hover:bg-accent hover:text-white"
              }
            `}
          >
            More
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                moreOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* More Dropdown */}
          <div
            className={`
              absolute top-[120%] right-0
              w-[220px]
              p-2
              rounded-2xl
              border border-neutral-200
              bg-white
              shadow-2xl
              overflow-hidden
              transition-all duration-300
              ${
                moreOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }
            `}
          >
            <div className="flex flex-col">
              {moreLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMoreOpen(false)}
                  className="
                    px-5 md:px-4
                    py-4 md:py-3
                    text-lg md:text-sm
                    leading-relaxed
                    
                    text-secondary-text
                    rounded-lg
                    hover:bg-neutral-200
                  
                    transition-colors
                    border-b border-neutral-200
                    last:border-b-0
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
