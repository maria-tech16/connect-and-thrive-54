import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 group border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-medium text-muted-foreground">{title}</span>
        <div className="h-10 w-10 rounded-xl gradient-primary-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <p className="text-3xl font-bold text-card-foreground tracking-tight">{value}</p>
      {trend && (
        <p className={`text-xs mt-2 font-medium ${trendUp ? 'text-success' : 'text-muted-foreground'}`}>
          {trendUp && '↑ '}{trend}
        </p>
      )}
    </div>
  );
}
