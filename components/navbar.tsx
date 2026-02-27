"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const navItems = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="w-full border-b border-border bg-surface/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6 relative">
        <Link href="/" className="font-bold text-lg md:text-xl tracking-tight">
          Abdullah Rifak
        </Link>

        <div className="hidden md:flex items-center gap-3 md:gap-5 text-sm md:text-base">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive ? "text-brand" : "hover:text-brand"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-md transition-colors ${
              pathname === "/contact"
                ? "bg-brand-strong text-white"
                : "bg-brand text-white hover:bg-brand-strong"
            }`}
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 py-2 rounded-md border border-border bg-surface-soft hover:border-brand hover:text-brand transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden h-10 w-10 rounded-md border border-border bg-surface-soft relative flex justify-center items-center hover:border-brand transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`absolute block w-5 h-0.5 bg-foreground transition-transform duration-200 ${
              isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-foreground transition-opacity duration-150 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-foreground transition-transform duration-200 ${
              isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm border transition-colors ${
                  isActive
                    ? "border-brand text-brand bg-surface-soft"
                    : "border-border hover:border-brand hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm text-center transition-colors ${
              pathname === "/contact"
                ? "bg-brand-strong text-white"
                : "bg-brand text-white hover:bg-brand-strong"
            }`}
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="w-full px-3 py-2 rounded-md border border-border bg-surface-soft hover:border-brand hover:text-brand transition-colors text-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}