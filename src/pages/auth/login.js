import React from "react";
import Image from "next/image";
import Link from "next/link";
import loginIllustration from "../../../public/images/login.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen lg:pt-4">
      <div className="lg:max-w-xl mx-auto bg-white p-4  flex flex-col lg:flex-row justify-center rounded-md shadow-md">
        <div className="lg:w-3/5 p-4 bg-black flex flex-col justify-between rounded-xl font-bold mb-6">
          <div className="flex justify-between ">
            <FontAwesomeIcon icon={faFaceSmile} />
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
          <Image
            src={loginIllustration}
            alt="Login"
            className="mx-auto w-96"
            height={100}
            width={100}
          />
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faFaceSmile} />
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
        </div>
        <div className="lg:w-3/5 p-4">
          <div className="text-black text-center text-4xl font-bold pb-4">
            <h1>MatchMate</h1>
          </div>
          <h1 className="text-2xl font-bold mb-3 text-gray-600">Login</h1>
          <form className="flex flex-col gap-3">
            <div className=" flex flex-col  gap-3">
              <input
                type="text"
                className="rounded-full bg-gray-100 w-full px-4 py-2"
                placeholder="Email.email@email.com"
              />
              <input
                type="password"
                className="rounded-full bg-gray-100 w-full px-4 py-2"
                placeholder="*********"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900"
            >
              Sign In
            </button>
          </form>
          <div>
            {/* OR */}
            <div className="flex flex-col text-md text-black items-center py-4">
              <p>or</p>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
              >
                Google
              </button>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
              >
                Facebook
              </button>
            </div>
            <div className="flex items-center gap-3 py-2 w-full text-center">
              <Link
                href="/auth/signup"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
              >
                <button>Don&apos;t have an account?</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
