import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioMessage } from "@/types/portfolio";
import { MessageCard } from "@/features/admin/components/messages/message-card";

interface MessagesPanelProps {
  messages: PortfolioMessage[];
}

export function MessagesPanel({ messages }: MessagesPanelProps) {
  if (messages.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-zinc-300">Nenhuma mensagem recebida ainda.</CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
}
