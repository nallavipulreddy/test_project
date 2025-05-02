import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Circle, MoveRight, ShieldHalf, Volleyball } from "lucide-react";

const images = [
  "https://images.pexels.com/photos/3452356/pexels-photo-3452356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2444852/pexels-photo-2444852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Sticky Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-black-700">Sports Columbus</h1>
        <div className="space-x-4">
          <a href="/login" className="text-sm text-gray-700 hover:text-blue-500">Login</a>
          <a href="/signup" className="text-sm text-gray-700 hover:text-blue-500">Signup</a>
          <a href="/about" className="text-sm text-gray-700 hover:text-blue-500">About Us</a>
          <a href="/help" className="text-sm text-gray-700 hover:text-blue-500">Help</a>
        </div>
      </nav>

      {/* Hero Section with Slideshow Background and Fade Effect */}
      <section className="relative text-center py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {images.map((image, index) => (
          <div
            key={index}
            className={\`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out \${index === currentImage ? "opacity-70" : "opacity-0"}\`}
            style={{ backgroundImage: \`url(\${image})\` }}
          ></div>
        ))}
        <div className="relative z-10 bg-white/70 p-6 rounded-xl inline-block">
          <h1 className="text-4xl font-bold mb-4 text-black">Sports Columbus</h1>
          <p className="text-xl mb-8 text-black">Unite. Play. Dominate. Across All Sports.</p>
          <div className="flex justify-center gap-4">
            <Button>Browse Tournaments</Button>
            <Button variant="outline" className="text-black">Register Your Team</Button>
          </div>
        </div>
      </section>

      {/* Live Sports Section */}
      <section className="px-4 py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Live & Upcoming Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { sport: "Cricket", icon: <ShieldHalf />, match: "Warriors vs Titans" },
            { sport: "Soccer", icon: <Circle />, match: "Columbus FC vs Redhawks" },
            { sport: "Badminton", icon: <MoveRight />, match: "Aces vs Smashers" },
            { sport: "Volleyball", icon: <Volleyball />, match: "Spikers vs Diggers" },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="font-semibold text-lg">{item.sport}</h3>
                </div>
                <p>{item.match}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="px-4 py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Top Players</h2>
        <Tabs defaultValue="cricket" className="w-full max-w-4xl mx-auto">
          <TabsList className="flex justify-center gap-4 mb-4">
            <TabsTrigger value="cricket">Cricket</TabsTrigger>
            <TabsTrigger value="soccer">Soccer</TabsTrigger>
            <TabsTrigger value="badminton">Badminton</TabsTrigger>
            <TabsTrigger value="volleyball">Volleyball</TabsTrigger>
          </TabsList>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((rank) => (
              <Card key={rank} className="text-center p-4">
                <CardContent>
                  <Trophy className="mx-auto text-yellow-500 mb-2" />
                  <h3 className="font-bold text-lg">Player {rank}</h3>
                  <p className="text-sm">Team Name</p>
                  <p className="text-sm">Runs: {Math.floor(Math.random() * 100)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Tabs>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Create/Join a Club", "Register Team & Players", "Compete and Score", "Track Stats & Glory"].map((step, idx) => (
            <Card key={idx} className="text-center p-6 shadow-sm">
              <CardContent>
                <div className="text-4xl font-bold mb-2">{idx + 1}</div>
                <p>{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-500">
        Columbus Multi-Sport League © {new Date().getFullYear()} | <a href="/admin" className="text-blue-500">Admin Login</a>
      </footer>
    </div>
  );
}
