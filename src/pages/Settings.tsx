import { Settings as SettingsIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences.</p>
      </div>
      <div className="bg-card rounded-xl card-shadow p-12 text-center">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <SettingsIcon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">Settings coming soon</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Account settings, notification preferences, and privacy controls will be available here.
        </p>
      </div>
    </div>
  );
}
