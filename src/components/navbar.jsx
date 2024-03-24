import React, { useState } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-screen border backdrop-blur-sm bg-background/90 border-zinc-700/45">
        <div className="items-center px-4 py-4 m-auto bg-transparent md:px-8">
          <div className="flex items-center justify-between">
            {/* NAV CONTAINER */}
            <div className="flex items-center space-x-4">
              {/* LOGO */}
              <div>
                <Link
                  to="https://www.itisvallauri.edu.it/"
                  className="flex items-center space-x-2 text-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h- text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                  <span className="font-bold">Meteo Vallauri</span>
                </Link>
              </div>
              {/* NAV */}
              <div className="items-center hidden space-x-2 md:flex">
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })} text-secondary-foreground`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })} text-secondary-foreground`}
                  to="chi-siamo"
                >
                  Chi siamo
                </Link>
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })} text-secondary-foreground`}
                  to="storico"
                >
                  Storico
                </Link>
              </div>
            </div>

            {/* LOGIN */}
            <div className="hidden space-x-2 md:flex">
              <ModeToggle />
              <Link
                className={`${buttonVariants({
                  variant: "outline",
                })} text-secondary-foreground`}
                to="/log-in"
              >
                Log In
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "",
                })}`}
                to="/sign-up"
              >
                Sign Up
              </Link>
            </div>
            {/* MOBILE ICON */}
            <div className="flex items-center md:hidden">
              {/* THEME SWITCH FOR MOBILE */}
              <div className="md:hidden me-4">
                <ModeToggle />
              </div>
              <Button className="mobile-menu-button" onClick={handleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
          {/* MOBILE MENU */}
        </div>
        <div
          className={`${
            !menu ? "hidden" : ""
          } mobile-menu p-4 space-y-2 bg-accent rounded-sm rounded-b-none`}
        >
          <div className="flex flex-col *:font-bold *:text-xl *:border *:bg-muted-foreground/20 *:rounded-sm">
            <Link
              className={`${buttonVariants({
                variant: "link",
              })}, text-secondary-foreground`}
              onClick={handleMenu}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${buttonVariants({
                variant: "link",
              })} text-secondary-foreground`}
              onClick={handleMenu}
              to="chi-siamo"
            >
              Chi siamo
            </Link>
            <Link
              className={`${buttonVariants({
                variant: "link",
              })} text-secondary-foreground`}
              onClick={handleMenu}
              to="storico"
            >
              Storico
            </Link>
          </div>
          <div className="flex justify-between">
            <Link
              className={`${buttonVariants({
                variant: "outline",
              })} text-secondary-foreground`}
              onClick={handleMenu}
              to="/log-in"
            >
              Log In
            </Link>
            <Link
              className={`${buttonVariants({
                variant: "",
              })}`}
              onClick={handleMenu}
              to="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
