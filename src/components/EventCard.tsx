import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
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

const categoryColors: Record<string, string> = {
  Tech: "bg-primary/10 text-primary",
  Volunteer: "bg-success/10 text-success",
  Workshop: "bg-accent/10 text-accent",
  Networking: "bg-warning/10 text-warning",
};

export function EventCard({ title, date, location, image, category, spots, applied }: EventCardProps) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group border border-border/50">
      <div className="h-44 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        <Badge className={`absolute top-3 left-3 ${categoryColors[category] || "bg-secondary text-secondary-foreground"} border-0 text-xs font-semibold backdrop-blur-sm`}>
          {category}
        </Badge>
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium text-card-foreground">
          <Users className="h-3 w-3" />
          {spots} left
        </div>
      </div>
      <div className="p-5 space-y-3.5">
        <h3 className="font-semibold text-card-foreground text-[15px] line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary/60" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary/60" />
            <span>{location}</span>
          </div>
        </div>
        <Button
          className={`w-full rounded-xl gap-2 font-semibold text-[13px] ${applied ? '' : 'gradient-primary hover:opacity-90 border-0'}`}
          size="sm"
          variant={applied ? "secondary" : "default"}
        >
          {applied ? "Applied ✓" : (
            <>Apply Now <ArrowRight className="h-3.5 w-3.5" /></>
          )}
        </Button>
      </div>
    </div>
  );
}
