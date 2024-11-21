"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map(({ name, href }) => {
        const isActive = pathName.startsWith(href);
        return (
          <Link
            href={href}
            key={name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
