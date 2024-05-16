import React from "react";

export const metadata = {
  title: "Info",
  description: "Info",
};

export default function InfoLayout({
  children,
  contacts,
  team,
}: {
  children: React.ReactNode;
  contacts: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-12 xl:px-6">
      <h1>Info layout</h1>
      {children}
      <div className="grid grid-cols-2">
        {contacts}
        {team}
      </div>
    </div>
  );
}
