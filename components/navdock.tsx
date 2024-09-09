"use client";
import React from "react";
import {
    IconBrandDiscord,
  IconBrandInstagram,
  IconExchange,
  IconFlag,
  IconHome,
  IconTerminal2,
  IconBrandWhatsapp,
  IconUser,
  IconUsersGroup,
  IconQuestionMark,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/dock";

export function NavDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-terminal-green" />
      ),
      href: "/",
    },

    {
      title: "Register",
      icon: (
        <IconUser className="h-full w-full text-terminal-green" />
      ),
      href: "https://ctf.yama.ninja",
    },
    {
      title: "Terminal",
      icon: (
        <IconTerminal2 className="h-full w-full text-terminal-green" />
      ),
      href: "/terminal",
    },
    {
      title: "Challenges",
      icon: (
        <IconFlag className="h-full w-full text-terminal-green" />
      ),
      href: "/challenges",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-terminal-green" />
      ),
      href: "/changelog",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-terminal-green" />
      ),
      href: "https://discord.gg/3QatKJYEcr",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-terminal-green" />
      ),
      href: "https://chat.whatsapp.com/InsH8m4aqOPF94OMfBl38B",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-terminal-green" />
      ),
      href: "https://www.instagram.com/yama.ctf",
    },
    {
      title: "Core Team",
      icon: (
        <IconUsersGroup className="h-full w-full text-terminal-green" />
      ),
      href: "/coreteam",
    },
    {
      title: "FAQs",
      icon: (
        <IconQuestionMark className="h-full w-full text-terminal-green" />
      ),
      href: "/faq",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full flex items-center justify-center p-4">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
