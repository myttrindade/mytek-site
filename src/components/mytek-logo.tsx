import Image from "next/image";

import { cn } from "@/lib/utils";

export function MytekLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="mytek"
      width={37}
      height={32}
      className={cn("h-8 w-auto object-contain", className)}
      priority
    />
  );
}
