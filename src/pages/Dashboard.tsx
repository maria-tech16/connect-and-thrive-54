import { Calendar, Users, FileText, TrendingUp, Clock, CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { EventCard } from "@/components/EventCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  approved: "bg-success/10 text-success border-0 font-medium",
  pending: "bg-warning/10 text-warning border-0 font-medium",
  rejected: "bg-destructive/10 text-destructive border-0 font-medium",
};

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="gradient-primary rounded-2xl p-6 md:p-8 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium text-primary-foreground/80">Welcome back</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Hey Alex! 👋</h1>
          <p className="text-primary-foreground/80 mt-1.5 text-sm md:text-base max-w-lg">
            You have 3 upcoming events and 2 pending applications. Let's make an impact today!
          </p>
          <Button variant="secondary" size="sm" className="mt-4 rounded-full gap-2 font-semibold">
            Explore Events <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Events Joined" value={12} icon={Calendar} trend="+2 this month" trendUp />
        <StatCard title="Applications" value={8} icon={FileText} trend="3 pending" />
        <StatCard title="Connections" value={47} icon={Users} trend="+5 this week" trendUp />
        <StatCard title="Impact Score" value={850} icon={TrendingUp} trend="Top 10%" trendUp />
      </div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-foreground">Upcoming Events</h2>
          <Button variant="ghost" size="sm" className="text-primary text-[13px] gap-1 font-semibold hover:bg-primary/5">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-foreground">Recent Applications</h2>
          <Button variant="ghost" size="sm" className="text-primary text-[13px] gap-1 font-semibold hover:bg-primary/5">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="bg-card rounded-2xl card-shadow overflow-hidden border border-border/50">
          <div className="divide-y divide-border">
            {recentApplications.map((app) => (
              <div key={app.event} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  {statusIcon[app.status as keyof typeof statusIcon]}
                  <div>
                    <p className="font-medium text-card-foreground text-sm group-hover:text-primary transition-colors">{app.event}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{app.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={statusBadge[app.status as keyof typeof statusBadge]}>
                    {app.status}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
