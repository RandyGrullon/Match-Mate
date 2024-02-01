// components/Header.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MatchMateLogo from "../../public/images/match-mate-logo.svg";
import NotificationBellCounter from "./NotificationBellCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Header = () => {
  const notificacionesCount = 3;
  const router = useRouter();

  const routerPath = router.pathname.split("/")[1];
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
      <div className="capitalize text-black font-bold">{routerPath}</div>

      {/* Icono de campana para notificaciones */}
      <div className="flex gap-2 mr-3 text-black">
        <NotificationBellCounter count={notificacionesCount} />
        <FontAwesomeIcon icon={faMessage} size="lg" />
      </div>

      {/* Icono de mensaje */}
    </div>
  );
};

export default Header;
