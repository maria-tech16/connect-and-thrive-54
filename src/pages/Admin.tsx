import { Calendar, Users, CheckCircle2, Clock, Plus, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const pendingApplications = [
  { name: "Sarah Chen", event: "Tech Community Meetup", role: "Volunteer", date: "Apr 3", avatar: "SC" },
  { name: "Mike Johnson", event: "Spring Volunteer Drive", role: "Influencer", date: "Apr 4", avatar: "MJ" },
  { name: "Priya Patel", event: "Creative Workshop", role: "Participant", date: "Apr 5", avatar: "PP" },
  { name: "David Lee", event: "Tech Community Meetup", role: "Volunteer", date: "Apr 5", avatar: "DL" },
];

const recentEvents = [
  { title: "Tech Community Meetup", applicants: 24, approved: 18, date: "Apr 12" },
  { title: "Spring Volunteer Drive", applicants: 45, approved: 30, date: "Apr 18" },
  { title: "Creative Workshop", applicants: 15, approved: 8, date: "Apr 25" },
];

export default function Admin() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Organizer Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your events and applications.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Events" value={6} icon={Calendar} trend="+2 this month" trendUp />
        <StatCard title="Total Applicants" value={84} icon={Users} trend="+12 today" trendUp />
        <StatCard title="Approved" value={56} icon={CheckCircle2} trend="67% rate" trendUp />
        <StatCard title="Pending Review" value={28} icon={Clock} trend="Action needed" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 card-shadow">
          <h2 className="text-lg font-semibold text-foreground mb-4">Pending Applications</h2>
          <div className="space-y-3">
            {pendingApplications.map((app) => (
              <div key={app.name + app.event} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    {app.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm">{app.name}</p>
                    <p className="text-xs text-muted-foreground">{app.event} · {app.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="default" className="h-7 text-xs">Approve</Button>
                  <Button size="sm" variant="outline" className="h-7 text-xs">Decline</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 card-shadow">
          <h2 className="text-lg font-semibold text-foreground mb-4">Your Events</h2>
          <div className="space-y-3">
            {recentEvents.map((event) => (
              <div key={event.title} className="p-3 rounded-lg bg-muted/50 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-card-foreground text-sm">{event.title}</p>
                  <Badge variant="secondary" className="text-xs">{event.date}</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{event.applicants} applicants</span>
                  <span>{event.approved} approved</span>
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(event.approved / event.applicants) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
