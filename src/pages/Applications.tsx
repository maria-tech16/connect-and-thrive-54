import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

const applications = [
  { event: "Tech Community Meetup", role: "Volunteer", date: "Apr 3, 2026", status: "pending" },
  { event: "Spring Volunteer Drive", role: "Team Lead", date: "Apr 1, 2026", status: "approved" },
  { event: "Startup Pitch Night", role: "Participant", date: "Mar 30, 2026", status: "pending" },
  { event: "Beach Cleanup Day", role: "Volunteer", date: "Mar 28, 2026", status: "rejected" },
  { event: "Music Festival 2026", role: "Influencer", date: "Mar 25, 2026", status: "approved" },
  { event: "Design Thinking Workshop", role: "Participant", date: "Mar 20, 2026", status: "approved" },
];

const statusConfig = {
  approved: { icon: CheckCircle2, class: "bg-success/10 text-success border-0", iconClass: "text-success" },
  pending: { icon: Clock, class: "bg-warning/10 text-warning border-0", iconClass: "text-warning" },
  rejected: { icon: XCircle, class: "bg-destructive/10 text-destructive border-0", iconClass: "text-destructive" },
};

export default function Applications() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Applications</h1>
        <p className="text-muted-foreground mt-1">Track your event applications and their status.</p>
      </div>

      <div className="bg-card rounded-xl card-shadow overflow-hidden">
        <div className="divide-y divide-border">
          {applications.map((app, i) => {
            const config = statusConfig[app.status as keyof typeof statusConfig];
            const Icon = config.icon;
            return (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${config.iconClass}`} />
                  <div>
                    <p className="font-medium text-card-foreground text-sm">{app.event}</p>
                    <p className="text-xs text-muted-foreground">{app.role} · Applied {app.date}</p>
                  </div>
                </div>
                <Badge className={config.class}>{app.status}</Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
