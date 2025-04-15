import React from "react";
import { Input } from "./ui/input";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function MyHeader() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b">
        <div className="w-full max-w-md">
          <Input
            type="text"
            placeholder="Search"
            className="w-full rounded-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-black text-white rounded-full hover:bg-gray-800">
            Create Event
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </div>
  );
}

export default MyHeader;
