"use client";

import {
  AlertTriangleIcon,
  CalendarCheckIcon,
  CheckCircle2Icon,
  MessageCircleIcon,
  StarIcon,
  UserPlusIcon,
} from "lucide-react";

import { AnimatedList } from "@/components/velora/animated-list";
import { cn } from "@/lib/utils";

const notifications = [
  {
    icon: MessageCircleIcon,
    tone: "bg-emerald-500/15 text-emerald-500",
    title: "Novo lead no WhatsApp",
    description: "Quanto custa o plano completo?",
    time: "agora",
  },
  {
    icon: UserPlusIcon,
    tone: "bg-blue-500/15 text-blue-500",
    title: "Lead recebido",
    description: "João Pedro: orçamento novo projeto",
    time: "2min atrás",
  },
  {
    icon: AlertTriangleIcon,
    tone: "bg-amber-500/15 text-amber-500",
    title: "Sem resposta há 2h",
    description: "Ana foi notificada automaticamente",
    time: "5min atrás",
  },
  {
    icon: CalendarCheckIcon,
    tone: "bg-violet-500/15 text-violet-500",
    title: "Reunião agendada",
    description: "Maria Clara: apresentação de proposta",
    time: "12min atrás",
  },
  {
    icon: CheckCircle2Icon,
    tone: "bg-pink-500/15 text-pink-500",
    title: "Negócio fechado",
    description: "Maria Clara: contrato assinado",
    time: "18min atrás",
  },
  {
    icon: StarIcon,
    tone: "bg-cyan-500/15 text-cyan-500",
    title: "Cliente novo",
    description: "Nortec: primeira compra",
    time: "24min atrás",
  },
];

/**
 * Looping notification feed built on <AnimatedList />.
 */
export function ActivityList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[26rem] overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent)]",
        className
      )}
    >
      <AnimatedList delay={1800}>
        {notifications.map((n) => (
          <div
            key={n.title}
            className="flex items-center gap-4 rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur"
          >
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl",
                n.tone
              )}
            >
              <n.icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center justify-between gap-2 text-sm font-medium">
                {n.title}
                <span className="shrink-0 text-xs font-normal text-muted-foreground">
                  {n.time}
                </span>
              </p>
              <p className="truncate text-sm text-muted-foreground">
                {n.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}
