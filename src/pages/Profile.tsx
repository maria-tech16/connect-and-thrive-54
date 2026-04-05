import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Calendar, Edit, Award } from "lucide-react";

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
      <Card className="p-6 card-shadow">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">AK</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Alex Kim</h1>
                <p className="text-muted-foreground">Community Enthusiast & Event Organizer</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="h-4 w-4" /> Edit Profile
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> San Francisco, CA</span>
              <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> alex@example.com</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Joined Jan 2025</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5 card-shadow text-center">
          <p className="text-3xl font-bold text-primary">12</p>
          <p className="text-sm text-muted-foreground">Events Attended</p>
        </Card>
        <Card className="p-5 card-shadow text-center">
          <p className="text-3xl font-bold text-primary">48</p>
          <p className="text-sm text-muted-foreground">Volunteer Hours</p>
        </Card>
        <Card className="p-5 card-shadow text-center">
          <p className="text-3xl font-bold text-primary">850</p>
          <p className="text-sm text-muted-foreground">Impact Score</p>
        </Card>
      </div>

      <Card className="p-6 card-shadow">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" /> Skills & Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-6 card-shadow">
        <h2 className="text-lg font-semibold text-foreground mb-4">Participation History</h2>
        <div className="divide-y divide-border">
          {history.map((item) => (
            <div key={item.event} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-card-foreground text-sm">{item.event}</p>
                <p className="text-xs text-muted-foreground">{item.role} · {item.date}</p>
              </div>
              <Badge className="bg-success/10 text-success border-0">{item.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
