import React from "react";
import Link from "next/link";
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

const Navbar = () => {
  const linkClassDesktop =
    "text-black px-4 py-2 focus:text-red-500 hover:text-red-500";
  const logoClassDesktop = "text-black text-xl font-bold";
  const linkClassMobile =
    "w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-3 pb-1";

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y enlace a la página de inicio (visible solo en desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/"
            passHref
            className={`${linkClassDesktop} ${logoClassDesktop}`}
          >
            <Image
              src={MatchMateLogo}
              alt="MatchMate Logo"
              width={50}
              height={50}
              className="mr-2"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link href="/teams" passHref className={linkClassDesktop}>
            <FontAwesomeIcon icon={faPeopleGroup} size="lg" className="mr-2" />
            Teams
          </Link>

          <Link href="/tournaments" passHref className={linkClassDesktop}>
            <FontAwesomeIcon icon={faTrophy} size="lg" className="mr-2" />
            Tournaments
          </Link>

          {/* agregar uno para comunidad y un icono de world */}
          <Link href="/Community" passHref className={linkClassDesktop}>
            <FontAwesomeIcon
              icon={faEarthAsia}
              size="lg"
              className="mr-2"
            />
            Community
          </Link>

          <Link href="/profile" passHref className={linkClassDesktop}>
            <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" />
            Profile
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <section
            id="bottom-navigation"
            className="block fixed inset-x-0 bottom-0 z-50 bg-white shadow border-t-2"
          >
            <div id="tabs" className="flex justify-between text-black">
              {/* Tab 1 */}
              <Link href="/" passHref className={linkClassMobile}>
                <FontAwesomeIcon
                  icon={faHome}
                  size="lg"
                  className="inline-block mb-1"
                />
              </Link>

              {/* Tab 2 */}
              <Link href="/teams" passHref className={linkClassMobile}>
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  size="lg"
                  className="inline-block mb-1"
                />
              </Link>

              {/* Tab 3 */}
              <Link href="/tournaments" passHref className={linkClassMobile}>
                <FontAwesomeIcon
                  icon={faTrophy}
                  size="lg"
                  className="inline-block mb-1"
                />
              </Link>

              {/* Tab 4 */}
              <Link href="/Community" passHref className={linkClassMobile}>
                <FontAwesomeIcon
                  icon={faEarthAsia}
                  size="lg"
                  className="inline-block mb-1"
                />
              </Link>

              {/* Tab 5 */}
              <Link href="/profile" passHref className={linkClassMobile}>
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  className="inline-block mb-1"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
