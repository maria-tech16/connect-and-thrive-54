import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Messages() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-1 text-[15px]">Chat with event organizers and team members.</p>
      </div>
      <div className="bg-card rounded-2xl card-shadow p-12 md:p-16 text-center border border-border/50">
        <div className="h-16 w-16 rounded-2xl gradient-primary-soft flex items-center justify-center mx-auto mb-5">
          <MessageSquare className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-bold text-foreground text-lg mb-2">No messages yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          When you apply for events or get approved, you'll be able to message organizers here.
        </p>
        <Button variant="outline" className="mt-6 rounded-xl gap-2 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/30">
          <Send className="h-4 w-4" /> Start a Conversation
        </Button>
      </div>
    </div>
  );
}
