import { Settings as SettingsIcon, Bell, Shield, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const settingGroups = [
  {
    icon: Bell,
    title: "Notifications",
    description: "Manage how you receive alerts",
    items: [
      { label: "Email notifications", description: "Receive updates via email", enabled: true },
      { label: "Push notifications", description: "Browser push alerts", enabled: false },
      { label: "Event reminders", description: "Remind me before events", enabled: true },
    ],
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "Control your visibility",
    items: [
      { label: "Public profile", description: "Allow others to view your profile", enabled: true },
      { label: "Show participation", description: "Display events on your profile", enabled: true },
    ],
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Customize your experience",
    items: [
      { label: "Dark mode", description: "Switch to dark theme", enabled: false },
      { label: "Compact view", description: "Reduce spacing in lists", enabled: false },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1 text-[15px]">Manage your account preferences.</p>
      </div>

      <div className="space-y-5">
        {settingGroups.map((group) => (
          <Card key={group.title} className="p-6 card-shadow rounded-2xl border-border/50">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl gradient-primary-soft flex items-center justify-center">
                <group.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">{group.title}</h2>
                <p className="text-xs text-muted-foreground">{group.description}</p>
              </div>
            </div>
            <div className="space-y-1">
              {group.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                  <Switch defaultChecked={item.enabled} />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
