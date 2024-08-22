"use client";

import Landing from "./Landing";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Landing />
        </SessionProvider>
      </body>
    </html>
  );
}