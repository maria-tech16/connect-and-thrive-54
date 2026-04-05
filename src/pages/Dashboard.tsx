import { Calendar, Users, FileText, TrendingUp, Clock, CheckCircle2, XCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { EventCard } from "@/components/EventCard";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  { title: "Tech Community Meetup", date: "Apr 12, 2026", location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop", category: "Tech", spots: 15 },
  { title: "Spring Volunteer Drive", date: "Apr 18, 2026", location: "Austin, TX", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", category: "Volunteer", spots: 30, applied: true },
  { title: "Creative Workshop", date: "Apr 25, 2026", location: "New York, NY", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", category: "Workshop", spots: 8 },
];

const recentApplications = [
  { event: "Music Festival 2026", status: "approved", date: "Mar 28" },
  { event: "Startup Pitch Night", status: "pending", date: "Mar 30" },
  { event: "Beach Cleanup", status: "rejected", date: "Apr 1" },
  { event: "Spring Volunteer Drive", status: "pending", date: "Apr 3" },
];

const statusIcon = {
  approved: <CheckCircle2 className="h-4 w-4 text-success" />,
  pending: <Clock className="h-4 w-4 text-warning" />,
  rejected: <XCircle className="h-4 w-4 text-destructive" />,
};

const statusBadge = {
  approved: "bg-success/10 text-success border-0",
  pending: "bg-warning/10 text-warning border-0",
  rejected: "bg-destructive/10 text-destructive border-0",
};

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome back, Alex! 👋</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your events.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Events Joined" value={12} icon={Calendar} trend="+2 this month" trendUp />
        <StatCard title="Applications" value={8} icon={FileText} trend="3 pending" />
        <StatCard title="Connections" value={47} icon={Users} trend="+5 this week" trendUp />
        <StatCard title="Impact Score" value={850} icon={TrendingUp} trend="Top 10%" trendUp />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Applications</h2>
        <div className="bg-card rounded-xl card-shadow overflow-hidden">
          <div className="divide-y divide-border">
            {recentApplications.map((app) => (
              <div key={app.event} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  {statusIcon[app.status as keyof typeof statusIcon]}
                  <div>
                    <p className="font-medium text-card-foreground text-sm">{app.event}</p>
                    <p className="text-xs text-muted-foreground">{app.date}</p>
                  </div>
                </div>
                <Badge className={statusBadge[app.status as keyof typeof statusBadge]}>
                  {app.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
