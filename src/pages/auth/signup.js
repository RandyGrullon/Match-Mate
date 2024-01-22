import React from "react";
import Image from "next/image";
import Link from "next/link";
import signupIllustration from "../../../public/images/signup.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSmile } from "@fortawesome/free-solid-svg-icons";


const SignupPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen lg:pt-4">
      <div className="lg:max-w-xl mx-auto bg-white p-4 flex flex-col lg:flex-row justify-center rounded-md shadow-md">
        <div className="lg:w-3/5 p-4 bg-black flex flex-col justify-between rounded-xl font-bold mb-6">
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faSmile} />
            <FontAwesomeIcon icon={faSmile} />
          </div>
          <Image
            src={signupIllustration}
            alt="Signup"
            className="mx-auto w-96"
            height={100}
            width={100}
          />
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faSmile} />
            <FontAwesomeIcon icon={faSmile} />
          </div>
        </div>
        <div className="lg:w-3/5 p-4">
          <div className="text-black text-center text-4xl font-bold pb-4">
            <h1>MatchMate</h1>
          </div>
          <h1 className="text-2xl font-bold mb-3 text-gray-600">Sign Up</h1>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
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
              <input
                type="password"
                className="rounded-full bg-gray-100 w-full px-4 py-2"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center gap-3 py-2 w-full text-center text-black">
            <p>Already have an account?</p>
            <Link href="/auth/login" className="flex items-center gap-2  text-black py-2 px-4 ">
                Login
                <FontAwesomeIcon className="rounded-full p-1 bg-black text-white border-2 border-black" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
