import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ReactNode } from "react";
import { WrenchIcon } from "lucide-react";

const Navbar04Page = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-100">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        {/* <Logo /> */}
        <WrenchIcon />
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
          >
            Sign In
          </Button>
          <Button className="rounded-full">Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
