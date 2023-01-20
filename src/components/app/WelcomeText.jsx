import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Heading from "../core/Heading";

const WelcomeText = () => {
  return (
    <>
      <div className="text-center">
        <Heading>
          <p className="h-12">
            <Typewriter
              loop
              words={["Welcome to Sasol Products & Sasol Chemicals"]}
            />
          </p>
        </Heading>
      </div>
    </>
  );
};

export default WelcomeText;
