import React from "react";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";

const PageIntro = ({  title, children, centered = false }) => {
  return (
    <Container
      className={clsx(" ", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              " block max-w-5xl font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
};

export default PageIntro;
