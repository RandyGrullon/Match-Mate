import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const { user } = useAuth();
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Cambia el valor según lo que consideres "desktop"

  return <>{!user && (isDesktop ? <DesktopNav /> :  <MobileNav />)}</>;
};

export default Navigation;
