"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DropdownNavbar from "./DropdownNavbar";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 hidden md:block ${
          navbarBg ? "bg-white " : "bg-transparent "
        }`}
      >
        <div className="container mx-auto flex justify-between items-center h-14 px-6">
          <div
            className="font-extrabold text-2xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            VAN's
          </div>
          <div className="flex gap-8 font-bold items-center">
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="font-bold hover:bg-mythemes-mainPurple hover:text-white"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </div>
      <div
        className={`md:hidden sticky top-0 px-6 h-10 flex justify-between items-center ${
          navbarBg ? "bg-white " : "bg-transparent "
        } `}
      >
        <div
          className="items-center font-extrabold text-xl"
          onClick={() => router.push("/")}
        >
          VANS's
        </div>
        <div>
          <DropdownNavbar />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar;
