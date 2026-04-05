import { EventCard } from "@/components/EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const events = [
  { title: "Tech Community Meetup", date: "Apr 12, 2026", location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop", category: "Tech", spots: 15 },
  { title: "Spring Volunteer Drive", date: "Apr 18, 2026", location: "Austin, TX", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", category: "Volunteer", spots: 30 },
  { title: "Creative Workshop", date: "Apr 25, 2026", location: "New York, NY", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", category: "Workshop", spots: 8 },
  { title: "Startup Pitch Night", date: "May 2, 2026", location: "Los Angeles, CA", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop", category: "Networking", spots: 20 },
  { title: "Beach Cleanup Day", date: "May 10, 2026", location: "Miami, FL", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop", category: "Volunteer", spots: 50 },
  { title: "Design Thinking Workshop", date: "May 15, 2026", location: "Chicago, IL", image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&h=300&fit=crop", category: "Workshop", spots: 12 },
];

const categories = ["All", "Tech", "Volunteer", "Workshop", "Networking"];

export default function Events() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Discover Events</h1>
        <p className="text-muted-foreground mt-1">Find events that match your interests and skills.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search events..." className="pl-9 bg-card border-border" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <Button key={cat} variant={cat === "All" ? "default" : "secondary"} size="sm" className="rounded-full">
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}
