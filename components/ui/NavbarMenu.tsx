"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Navbar";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/projects">Projects</HoveredLink>
            <HoveredLink href="#contact">Contact Me</HoveredLink>
            {/* <HoveredLink href="/">Coming Soon</HoveredLink> */}
      </Menu>
    </div>
  );
}
