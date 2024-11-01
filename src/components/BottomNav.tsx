"use client";
import { Bell, Camera, Clock, Users, Video } from "lucide-react";
import { useState } from "react";

const tabsItems = [
  {
    tabName: "video",
    icon: <Video className="w-6 h-6" />,
  },
  {
    tabName: "clock",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    tabName: "camera",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    tabName: "bell",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    tabName: "paw",
    icon: <Users className="w-6 h-6" />,
  },
];

export const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState<string>("camera");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="max-w-md mx-auto px-4 py-2">
        <nav className="flex justify-between items-center">
          {tabsItems.map((tab) => (
            <button
              key={tab.tabName}
              onClick={() => setActiveTab(tab.tabName)}
              className={`p-3 rounded-full ${
                tab.tabName == "camera"
                  ? "bg-violet-700/20 text-violet-500"
                  : ""
              } ${
                activeTab === `${tab.tabName}`
                  ? "text-violet-500"
                  : "text-muted-foreground"
              }`}
            >
              {tab.icon}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
