import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  spots: number;
  applied?: boolean;
}

export function EventCard({ title, date, location, image, category, spots, applied }: EventCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all hover:-translate-y-0.5 group">
      <div className="h-40 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <Badge className="absolute top-3 left-3 bg-card/90 text-card-foreground backdrop-blur-sm border-0 text-xs">
          {category}
        </Badge>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-card-foreground line-clamp-1">{title}</h3>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>{spots} spots left</span>
          </div>
        </div>
        <Button className="w-full" size="sm" variant={applied ? "secondary" : "default"}>
          {applied ? "Applied ✓" : "Apply Now"}
        </Button>
      </div>
    </div>
  );
}
