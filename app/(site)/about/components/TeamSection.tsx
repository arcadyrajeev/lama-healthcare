"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    image: "/team/member1.jpg",
    linkedin: "https://linkedin.com/in/member1",
  },
  {
    name: "Michael Carter",
    role: "Chief Operating Officer",
    image: "/team/member2.jpg",
    linkedin: "https://linkedin.com/in/member2",
  },
  {
    name: "Emily Rodriguez",
    role: "VP, Revenue Cycle",
    image: "/team/member3.jpg",
    linkedin: "https://linkedin.com/in/member3",
  },
  {
    name: "David Lee",
    role: "Operations Director",
    image: "/team/member4.jpg",
    linkedin: "https://linkedin.com/in/member4",
  },
  {
    name: "Sophia Brown",
    role: "Client Success Lead",
    image: "/team/member5.jpg",
    linkedin: "https://linkedin.com/in/member5",
  },
  {
    name: "James Wilson",
    role: "Practice Consultant",
    image: "/team/member6.jpg",
    linkedin: "https://linkedin.com/in/member6",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6934D]">
            Our Team
          </p>

          <h2 className="mt-5 text-4xl leading-tight text-[#2D2D2D] md:text-5xl lg:text-6xl">
            <span className="font-serif">Meet our team,</span>

            <br />

            <span className="font-serif italic text-[#456B7C]">
              The operators and problem solvers
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href={member.linkedin}
              target="_blank"
              className="group block overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Linkedin Icon */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                  <FaLinkedinIn size={18} className="text-[#0A66C2]" />
                </div>

                {/* Text */}
                <div className="absolute bottom-0 w-full translate-y-6 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>

                  <p className="mt-1 text-sm text-gray-200">{member.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
