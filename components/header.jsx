import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignIn,
} from "@clerk/nextjs";
import { FileText } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { checkUser } from "@/lib/checkUser"; // Import the checkUser function to ensure user authentication


const Header = async() => {
  
  await checkUser(); // Ensure user is checked before rendering the header
  // This function checks if the user is logged in and creates a new user in the database if they are not
  // It is called in the header component to ensure that the user is authenticated before rendering the header
  // This is important to ensure that the user is authenticated before rendering the header

  return (
    <header className="fixed top-0 w-full border-b bg-bakground/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/proxiLogo.png"
            alt="Proxima Logo"
            width={200}
            height={60}
            className="h-60 w-auto object-contain"
            style={{ marginLeft: "-55px" }}
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* all of the functionality of signing in and inside the signed in page after ssuccessful sign in */}
          <SignedIn>
            <Link href="/dashboard">
              <Button variant={"outline"}>
                <LayoutDashboard className="h-4 w-4" /> {/* adding the icon option in button */}
                <span className="hidden md:block ">Industry Insights</span>
                </Button>
            </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <StarIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tool</span>
                <ChevronDown className="h-4 w-4" /> {/* adding the drop down icon option in button */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <Link href="/ai-cover-letter" className="flex items-center gap-2">
                  <PenBox className="h-4 w-4" />
                  <span>AI Cover Letter</span>
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>
        {/* Sign Up button for users who are not signed in */}
        <SignedOut> {/*it is a state indicating the user is not signed in */}
          <SignInButton>
            <Button variant="outline">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        {/* User button for signed in users */}
        {/*it is a button that shows user information and allows them to sign out */}
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                  userButtonPopoverCard: "shadow-xl",
                  avatarBox: "h-10 w-10",
                  userPreviewMainIdentifier: "font-semibold",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
        </div>
      </nav>
    </header>
  );
};

{/*We still dont have routes that will stop us from going directly to the dashboard route when we enter in directly in the ulr so we will need to implement some kind of authentication check on the dashboard page to redirect unauthenticated users to the sign in page*/ }
{/*we will go to middleware that we will create to handle authentication checks*/}

export default Header;
