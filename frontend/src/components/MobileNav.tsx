import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-mainOrange" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-semibold text-base text-gray-800 gap-2">
              <CircleUserRound className="text-mainOrange" />
              {user?.email}
            </span>
          ) : (
            <>
            <span className="text-[1.05rem] text-gray-800 font-semibold">Welcome to QuickBite</span>
            <p className="text-sm font-medium text-gray-600 mt-2 mb-6">Please log in to explore — your favorite meals delivered fast and fresh!</p>
          
           
            </>
          )}
        </SheetTitle>
        <Separator/>
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button onClick={() => loginWithRedirect()} className="flex-1 py-3 font-bold bg-mainOrange">Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
