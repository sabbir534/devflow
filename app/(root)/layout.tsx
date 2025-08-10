import { ReactNode } from "react";

import Navbar from "@/components/ui/navigation/navbar";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
