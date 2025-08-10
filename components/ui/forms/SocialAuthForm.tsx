/* eslint-disable import/order */
"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

import { toast } from "sonner";

import ROUTES from "@/constants/routes";

import { Button } from "../button";

function SocialAuthForm() {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
      toast.error("Sign in failed.", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign in.",
        style: {
          background: "orange",
        },
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="mr-2.5 invert-colors object-contain"
        />
        <span>LogIn with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>LogIn with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
