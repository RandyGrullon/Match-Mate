import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPeopleGroup,
  faTrophy,
  faEarthAsia,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import MatchMateLogo from "../../public/images/match-mate-logo.svg";

const DesktopNav = () => {
  const router = useRouter();
  const linkClass =
    "text-black px-4 py-2 focus:text-red-500 hover:text-red-500";
  const logoClass = "text-black text-xl font-bold";

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y enlace a la página de inicio */}
        <Link href="/" passHref className={`${linkClass} ${logoClass}`}>
          <Image
            src={MatchMateLogo}
            alt="MatchMate Logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </Link>

        <div>
          <Link href="/teams" passHref className={linkClass}>
            <FontAwesomeIcon icon={faPeopleGroup} size="lg" className="mr-2" />
            Teams
          </Link>

          <Link href="/tournaments" passHref className={linkClass}>
            <FontAwesomeIcon icon={faTrophy} size="lg" className="mr-2" />
            Tournaments
          </Link>

          <Link href="/leagues" passHref className={linkClass}>
            <FontAwesomeIcon icon={faEarthAsia} size="lg" className="mr-2" />
            Leagues
          </Link>

          <Link href="/profile" passHref className={linkClass}>
            <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" />
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
