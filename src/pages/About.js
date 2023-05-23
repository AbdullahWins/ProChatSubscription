import React from "react";

const About = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | About`;

  return (
    <section className="flex items-center justify-center">
      <div className="max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl">About</h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-aboutTextStart to-aboutTextEnd text-5xl font-bold pb-2">
            Myself
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 py-10 px-4">
          <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
            <p className="text-2xl text-aboutHeaderColor">Who</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-aboutGradientStart to-aboutGradientEnd text-8xl font-bold">
              I'M
            </p>
            <p className="text-base text-aboutDetailsColor pt-12">
              {process.env.REACT_APP_ApplicationName}, a Chat GPT API-powered AI
              chat app developed by {process.env.REACT_APP_CompanyName},
              provides natural language conversations with a virtual assistant
              for task assistance and helpful information. Its advanced language
              processing capabilities make it convenient for both personal and
              business use.
            </p>
          </div>
          <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
            <p className="text-2xl text-aboutHeaderColor">What</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-aboutGradientStart to-aboutGradientEnd text-8xl font-bold">
              I Do
            </p>
            <p className="text-base text-aboutDetailsColor pt-12">
              {process.env.REACT_APP_CompanyName}'s{" "}
              {process.env.REACT_APP_ApplicationName} is an AI chat app that
              uses Chat GPT API, helping users to accomplish their tasks and
              obtain helpful information via natural language conversations,
              thanks to its advanced language processing features. You're
              responsible for its development, deployment, and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
