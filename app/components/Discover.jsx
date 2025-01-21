import React from "react";
import Section from "./Section";
// import imageWhiteboard from "/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: "/processImg1.png", shape: 1, width: 200, height: 200 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold ">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          Our team of private investigators shadow the company director's for
          several weeks while our account managers focus on going through their
          trash. Our senior security experts then perform social engineering
          hacks to gain access to their{" "}
          <strong className="font-semibold ">business</strong>
          accounts — handing that information over to our forensic accounting
          team.
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive
          <strong className="font-semibold ">plan</strong> and,
          more importantly, a budget.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold ">
        Included in this phase
      </h3>
    </Section>
  );
};

export default Discover;