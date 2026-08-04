import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  {
    name: "Credentialing",
    href: "/services/credentialing",
  },
  {
    name: "Medical Billing",
    href: "/services/medical-billing",
  },
  {
    name: "Practice Operations",
    href: "/services/practice-operations",
  },
  {
    name: "New Practice Consulting",
    href: "/services/new-practice-consulting",
  },
  {
    name: "HIPAA Compliance",
    href: "/services/hipaa-compliance",
  },
];

const companyLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const resources = [
  {
    name: "Practice One",
    href: "/practice-one",
  },
  {
    name: "Case Studies",
    href: "/case-study",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const keywords = [
  "Medical Billing",
  "Credentialing",
  "Practice Operations",
  "HIPAA Compliance",
  "New Practice Consulting",
  "Practice One",
  "Revenue Cycle",
  "Healthcare Operations",
  "Provider Enrollment",
  "Independent Medical Practices",
];

export default function Footer() {
  return (
    <footer className="bg-main text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Top */}
        {/* Practice One */}
        <div className="mb-16 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#2F6173] via-[#4E90A8] to-[#C6944A] p-[1px]">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[31px] bg-[#2F6173] px-8 py-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DDB373]">
                Flagship Product
              </p>

              <h3 className="mt-3 font-serif text-4xl text-white">
                Practice One
              </h3>

              <p className="mt-4 max-w-xl leading-8 text-white/75">
                One accountable team. One operational system. Manage
                credentialing, billing, compliance, and practice operations from
                a single platform.
              </p>
            </div>

            <Link
              href="/practice-one"
              className="
              shrink-0
              rounded-full
              border-white
              border-1
              bg-gradient-to-r
              from-cyan-700 
              to-[#C6944A]
              px-8
              py-4
              font-semibold
              text-white
              transition
              duration-300
              hover:scale-105
            "
            >
              Explore Practice One
            </Link>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Company */}

          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/lamahc-logo2.svg"
                alt="Lama Healthcare"
                width={170}
                height={55}
                className="h-auto w-auto"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              We help independent medical practices build stronger operations
              through credentialing, medical billing, compliance, and Practice
              One, our operational management platform.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://linkedin.com"
                className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-main"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <Link
                href="https://facebook.com"
                className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-main"
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="https://instagram.com"
                className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-main"
              >
                <FaInstagram size={16} />
              </Link>

              <Link
                href="https://x.com"
                className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-main"
              >
                <FaXTwitter size={16} />
              </Link>
            </div>
          </div>

          {/* Services */}

          <div>
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
                Services
              </h4>

              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group flex items-center justify-between text-sm text-white/70 transition hover:text-white"
                    >
                      {service.name}

                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Company
            </h4>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-sm text-white/70 transition hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="mb-5 mt-10 text-sm font-semibold uppercase tracking-widest text-accent">
                Resources
              </h4>

              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between text-sm text-white/70 transition hover:text-white"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-accent" />
                <span>support@lamahc.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-accent" />
                <span>+1 (702) 500-0077</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-accent" />
                <span>
                  5725 S. Valley View Blvd, Suite 7, Las Vegas, NV, 89118, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords */}

        <div className="mt-14 border-t border-white/10 pt-8">
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Healthcare Solutions
          </h5>

          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Lama Healthcare. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>

            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>

            <Link href="#" className="hover:text-white">
              HIPAA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
