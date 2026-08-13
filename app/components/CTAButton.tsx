"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  onClick,
}: CTAButtonProps) {
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-sm lg:text-base",
  };

  const variants = {
    primary: "bg-[#B9925A] text-white hover:bg-[#A8844F]",
    secondary: "bg-[#355F72] text-white hover:bg-[#294D5C]",
  };

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <motion.span
          whileHover={{
            x: 3,
            y: -3,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
        >
          <ArrowUpRight size={16} />
        </motion.span>
      )}
    </>
  );

  const classes = clsx(
    "inline-flex items-center gap-3 cursor-pointer rounded-full font-medium transition-colors duration-300",
    sizes[size],
    variants[variant],
    className,
  );

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {href ? (
        <Link href={href} onClick={onClick} className={classes}>
          {content}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={classes}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
