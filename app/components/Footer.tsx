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
  "Medical Billing",
  "Credentialing",
  "Revenue Cycle Management",
  "Virtual Staffing",
  "Practice Consulting",
];

const quickLinks = ["Home", "About", "Services", "Process", "FAQs", "Contact"];

const keywords = [
  "Medical Billing",
  "RCM",
  "Credentialing",
  "Healthcare Consulting",
  "Medical Coding",
  "Practice Growth",
  "Revenue Optimization",
  "Compliance",
  "Provider Enrollment",
  "Operations",
];

export default function Footer() {
  return (
    <footer className="bg-main text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Top */}

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
              Helping healthcare organizations streamline operations, improve
              revenue cycles, strengthen compliance, and scale with confidence
              through end-to-end operational support.
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
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="group flex items-center justify-between text-sm text-white/70 transition hover:text-white"
                  >
                    {service}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Company
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-accent" />
                <span>hello@lamahc.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-accent" />
                <span>+1 (000) 000-0000</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-accent" />
                <span>
                  Serving healthcare providers across the United States.
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
