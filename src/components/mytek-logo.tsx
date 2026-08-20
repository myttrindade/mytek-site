import Image from "next/image";

import { cn } from "@/lib/utils";

export function MytekLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="mytek"
      width={28}
      height={24}
      className={cn("h-6 w-auto object-contain", className)}
      priority
    />
  );
}
