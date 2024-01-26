// components/Header.jsx
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import MatchMateLogo from "../../public/images/match-mate-logo.svg";
import NotificationBellCounter from "./NotificationBellCounter";

const Header = () => {
  const notificacionesCount = 3;
  return (
    <div className="fixed inset-x-0 top-0 md:hidden flex justify-between items-center bg-white">
      {/* Logo */}
      <Link href="/" passHref className="text-xl font-bold">
        <Image
          src={MatchMateLogo}
          alt="MatchMate Logo"
          width={50}
          height={50}
        />
      </Link>

      {/* Icono de campana para notificaciones */}
      <div className="ml-8">
        <NotificationBellCounter count={notificacionesCount} />
      </div>
    </div>
  );
};

export default Header;
