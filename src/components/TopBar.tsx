import { Search, Bell, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopBar() {
  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between px-6 gap-4 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative max-w-md w-72 hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events, people..."
            className="pl-9 h-9 bg-secondary/60 border-0 focus-visible:ring-1 rounded-full text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative rounded-full h-9 w-9 hover:bg-primary/5">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full gradient-primary ring-2 ring-card" />
        </Button>
        <div className="h-6 w-px bg-border" />
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <Avatar className="h-8 w-8 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
            <AvatarFallback className="gradient-primary text-primary-foreground text-xs font-semibold">
              AK
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground leading-none">Alex Kim</p>
            <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">Pro Member</p>
          </div>
        </div>
      </div>
    </header>
  );
}
