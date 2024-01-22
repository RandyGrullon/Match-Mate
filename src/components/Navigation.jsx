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

const Navigation = () => {
  const linkClass = "w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-3 pb-1";

  return (
    <div className="">
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-50 bg-white shadow border-t-2"
      >
        <div id="tabs" className="flex justify-between text-black">
          {/* Tab 1 */}
          <Link href="#" className={linkClass}>
            <FontAwesomeIcon icon={faHome} size="lg" className="inline-block mb-1" />
          </Link>

          {/* Tab 2 */}
          <Link href="#" className={linkClass}>
            <FontAwesomeIcon icon={faPeopleGroup} size="lg" className="inline-block mb-1" />
          </Link>

          {/* Tab 3 */}
          <Link href="#" className={linkClass}>
            <FontAwesomeIcon icon={faTrophy} size="lg" className="inline-block mb-1" />
          </Link>

          {/* Tab 4 */}
          <Link href="#" className={linkClass}>
            <FontAwesomeIcon icon={faEarthAsia} size="lg" className="inline-block mb-1" />
          </Link>

          {/* Tab 5 */}
          <Link href="#" className={linkClass}>
            <FontAwesomeIcon icon={faUser} size="lg" className="inline-block mb-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
