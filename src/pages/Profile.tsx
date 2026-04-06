import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Calendar, Edit, Award, Star, Trophy, Target } from "lucide-react";

const skills = ["Event Planning", "Photography", "Social Media", "Public Speaking", "Design", "Marketing"];

const history = [
  { event: "Music Festival 2026", role: "Volunteer Coordinator", date: "Mar 2026", status: "Completed" },
  { event: "Tech Meetup Q1", role: "Attendee", date: "Feb 2026", status: "Completed" },
  { event: "Community Cleanup", role: "Team Lead", date: "Jan 2026", status: "Completed" },
  { event: "Holiday Food Drive", role: "Volunteer", date: "Dec 2025", status: "Completed" },
];

export default function Profile() {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <Card className="p-0 card-shadow overflow-hidden border-border/50 rounded-2xl">
        <div className="h-28 gradient-primary relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="px-6 pb-6 -mt-10 relative">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Avatar className="h-20 w-20 ring-4 ring-card shadow-lg">
              <AvatarFallback className="gradient-primary text-primary-foreground text-2xl font-bold">AK</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2 pt-2 sm:pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Alex Kim</h1>
                  <p className="text-muted-foreground text-[15px]">Community Enthusiast & Event Organizer</p>
                </div>
                <Button variant="outline" size="sm" className="gap-2 rounded-xl border-border/50">
                  <Edit className="h-4 w-4" /> Edit
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary/60" /> San Francisco, CA</span>
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-primary/60" /> alex@example.com</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary/60" /> Joined Jan 2025</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Star, value: "12", label: "Events Attended", color: "text-primary" },
          { icon: Trophy, value: "48", label: "Volunteer Hours", color: "text-accent" },
          { icon: Target, value: "850", label: "Impact Score", color: "text-success" },
        ].map((stat) => (
          <Card key={stat.label} className="p-5 card-shadow text-center rounded-2xl border-border/50 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="h-10 w-10 rounded-xl gradient-primary-soft flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="text-[13px] text-muted-foreground mt-1 font-medium">{stat.label}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6 card-shadow rounded-2xl border-border/50">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" /> Skills & Interests
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="rounded-full px-4 py-1.5 text-[13px] font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-6 card-shadow rounded-2xl border-border/50">
        <h2 className="text-lg font-bold text-foreground mb-4">Participation History</h2>
        <div className="divide-y divide-border">
          {history.map((item) => (
            <div key={item.event} className="py-3.5 flex items-center justify-between hover:bg-muted/30 -mx-2 px-2 rounded-lg transition-colors">
              <div>
                <p className="font-medium text-card-foreground text-sm">{item.event}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.role} · {item.date}</p>
              </div>
              <Badge className="bg-success/10 text-success border-0 font-medium">{item.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
