"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { navigation, productLinks, resourceLinks } from "@/lib/content";
import { useSupabase } from "@/lib/supabase-config-inject";
import type { User } from "@supabase/supabase-js";

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string; description?: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm font-medium">
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[280px] p-2 rounded-2xl glass-strong"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2.5 hover:bg-white/8 transition-colors"
              >
                <div className="text-sm font-medium text-white">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-white/50 mt-0.5">{item.description}</div>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { supabase } = useSupabase();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUser(data.user);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e: string, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 pt-4 px-4 md:px-6"
      >
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo size={30} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Dropdown label="Product" items={productLinks} />
              <Link href="/research" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Research
              </Link>
              <Dropdown label="Resources" items={resourceLinks} />
              <Link href="/careers" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Careers
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <>
                  <Link href="/dashboard" className="btn-ghost text-sm !py-2 !px-4">
                    Console
                  </Link>
                  <div className="text-xs text-white/50 font-mono truncate max-w-[160px]">{user.email}</div>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3">
                    Sign in
                  </Link>
                  <Link href="/register" className="btn-primary !py-2 !px-4 text-sm">
                    Get started
                    <ArrowRight size={14} />
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden rounded-3xl glass-strong p-4"
          >
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/8 hover:text-white text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              {user ? (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary justify-center"
                >
                  Go to Console <ArrowRight size={14} />
                </Link>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="btn-ghost justify-center"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary justify-center"
                  >
                    Get started <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
