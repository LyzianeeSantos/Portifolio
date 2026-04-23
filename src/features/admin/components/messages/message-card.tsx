import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioMessage } from "@/types/portfolio";

interface MessageCardProps {
  message: PortfolioMessage;
}

export function MessageCard({ message }: MessageCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-white">{message.name}</p>
            <p className="text-sm text-zinc-400">{message.email}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {format(new Date(message.createdAt), "dd/MM/yyyy HH:mm")}
          </span>
        </div>
        <p className="font-display text-3xl uppercase text-white">{message.subject}</p>
        <p className="text-base leading-7 text-zinc-300">{message.message}</p>
      </CardContent>
    </Card>
  );
}
