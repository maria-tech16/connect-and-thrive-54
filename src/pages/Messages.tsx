import { MessageSquare } from "lucide-react";

export default function Messages() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-1">Chat with event organizers and team members.</p>
      </div>
      <div className="bg-card rounded-xl card-shadow p-12 text-center">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">No messages yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          When you apply for events or get approved, you'll be able to message organizers here.
        </p>
      </div>
    </div>
  );
}
