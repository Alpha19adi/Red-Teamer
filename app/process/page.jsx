import React from "react";
import PageIntro from "../components/PageIntro";
import Discover from "../components/Discover";
import Build from "../components/Build";
import Deliver from "../components/Deliver";
import Values from "../components/Values";

const ProcessPage = () => {
  return (
    <div className="bg-dark overflow-hidden pt-20">
      <PageIntro  title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
    </div>
  );
};

export default ProcessPage;
