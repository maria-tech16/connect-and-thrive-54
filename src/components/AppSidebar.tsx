import { LayoutDashboard, Calendar, FileText, MessageSquare, User, Settings, Shield, Zap } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Applications", url: "/applications", icon: FileText },
  { title: "Messages", url: "/messages", icon: MessageSquare },
];

const accountItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

const adminItems = [
  { title: "Admin", url: "/admin", icon: Shield },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const renderItems = (items: typeof mainItems) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <NavLink
              to={item.url}
              end
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
              activeClassName="gradient-primary-soft text-primary font-semibold shadow-sm"
            >
              <item.icon className="h-[18px] w-[18px] shrink-0" />
              {!collapsed && <span className="text-[13px]">{item.title}</span>}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <div className="p-5 border-b border-sidebar-border">
        {!collapsed ? (
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-bold text-foreground tracking-tight">EventHub</h1>
          </div>
        ) : (
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center mx-auto">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
        )}
      </div>
      <SidebarContent className="px-3 py-5">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Main</SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(mainItems)}</SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Account</SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(accountItems)}</SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Manage</SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(adminItems)}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
