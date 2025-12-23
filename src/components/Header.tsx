"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import Logo from "@/app/logo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#distribuidor", label: "Seja um Distribuidor" },
    { href: "/#contato", label: "Contato" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <nav className="bg-black/95 text-white top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Logo />
          </Link>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive(link.href)}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-green-500 data-[active=true]:text-green-500  data-[active=false]:text-white/70"
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Outlined */}
          <div className="hidden md:block">
            <button className=" bg-[#00AA0E] text-white hover:bg-green-500/10 px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors">
              <Download size={16} />
              Baixar Catálogo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 pb-4 border-t border-zinc-800">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive(link.href)
                  ? "text-green-500 bg-green-500/10"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-4 w-full border-2 border-green-500 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-green-500/10 transition-colors">
              <Download size={16} />
              Baixar Catálogo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
