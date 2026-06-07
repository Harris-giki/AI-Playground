"use client";

import { usePathname } from "next/navigation";
import { ScrollOrbit } from "./ScrollOrbit";
import { SiteAmbience } from "./SiteAmbience";
import { ScrollPerfs } from "./ScrollPerfs";
import { Tier3TimerBar } from "./Tier3TimerBar";

/** Global motion + ambience for main site pages — not Film Studio. */
export function SiteChrome() {
  const pathname = usePathname();
  if (pathname.startsWith("/film-studio")) return null;

  return (
    <>
      <Tier3TimerBar />
      <SiteAmbience />
      <ScrollPerfs />
      <ScrollOrbit />
    </>
  );
}
