"use client";

import Particles from "@/components/Particles";
import RemoteCursors from "@/components/realtime/remote-cursors";
import EasterEggs from "@/components/easter-eggs";
import ElasticCursor from "@/components/ui/ElasticCursor";
import RadialMenu from "@/components/radial-menu/index";
import { usePathname } from "next/navigation";

export default function AppOverlays() {
  const pathname = usePathname();
  const showRealtimeOverlays = pathname === "/";

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {showRealtimeOverlays && <RemoteCursors />}
      <EasterEggs />
      <ElasticCursor />
      {showRealtimeOverlays && <RadialMenu />}
    </>
  );
}
