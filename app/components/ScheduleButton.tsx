"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
}

export default function ScheduleButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  ...props
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

  const classes = clsx(
    "inline-flex items-center gap-3 rounded-full font-medium transition-colors duration-300",
    sizes[size],
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}

      {icon && (
        <motion.span
          whileHover={{ x: 3, y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
        >
          <ArrowUpRight size={16} />
        </motion.span>
      )}
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {href ? (
        <Link href={href} className={classes}>
          {content}
        </Link>
      ) : (
        <button type="button" className={classes} {...props}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
