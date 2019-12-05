import React, { useReducer } from "react";
import { Carousel, CarouselItem, Row, Col, CarouselControl } from "reactstrap";
import SectionLink from "../SectionLink";

import logo from "assets/img/sym.png";
import grey from "assets/img/grey.png";
import firstBackground from "assets/img/bg.png";

// Slide duration and each slides content
const SLIDE_DURATION = 5000;
const SLIDES = [
  {
    key: 1,
    background: firstBackground,
    content: (
      <>
        <h1 className="introduction__title">
          We are dedicated to finding the ancestral health we have lost,
          starting with your skin
        </h1>
      </>
    )
  },
  {
    key: 2,
    background: firstBackground,
    content: (
      <>
        <h1 className="introduction__title">
          Symbiome offers up to 6 months of free & bespoke skincare with
          FDA-grade clinical trials
        </h1>
      </>
    )
  },
  {
    key: 3,
    background: firstBackground,
    content: (
      <>
        <h1 className="introduction__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </>
    )
  }
];

// Carousel progress bar of the active slide
const Indicator = ({ onClick, isActive }) => {
  return (
    <button className={isActive ? "active" : ""} type="button" onClick={onClick} />
  );
};

const Introduction = React.memo(() => {
  // Carousel state
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
          return { currentIndex: (state.currentIndex + 1) % SLIDES.length };
        case "PREVIOUS":
          return {
            currentIndex:
              (state.currentIndex - 1 + SLIDES.length) % SLIDES.length
          };
        case "GOTO":
          return { currentIndex: action.index };
        default:
          return state;
      }
    },
    { currentIndex: 0 }
  );

  function handleIndicatorClick(index) {
    // Ignore if this is already the active slide
    if (index === state.currentIndex) {
      return;
    }
    dispatch({ type: "GOTO", index });
  }

  return (
    <>
      <Row className="introduction">
        <Col className="introduction__hero">
          <img src={logo} alt="logo" className="introduction__logo" />
          <SectionLink
            className="introduction__sectionlink"
            text="Start Your Journey"
            image={grey}
          />
          <p>
            We are dedicated to finding the ancestral health we have lost &mdash;
            starting with your skin.
          </p>
        </Col>
        <Col
          className="introduction__carousel"
          style={{
            backgroundImage: `url(${SLIDES[state.currentIndex].background})`
          }}
        >
          <Carousel
            activeIndex={state.currentIndex}
            next={() => dispatch({ type: "NEXT" })}
            previous={() => dispatch({ type: "PREVIOUS" })}
            keyboard={false}
            pause={false}
            ride="carousel"
            interval={SLIDE_DURATION}
          >
            {/* Slides */}
            {SLIDES.map(slide => (
              <CarouselItem key={slide.key}>{slide.content}</CarouselItem>
            ))}
            <CarouselControl direction="prev" onClickHandler={() => dispatch({ type: "PREVIOUS" })} />
            <CarouselControl direction="next" onClickHandler={() => dispatch({ type: "NEXT" })} />
          </Carousel>
          {/* Use custom indicators to support progress animation */}
          <div class="introduction__indicators">
            {SLIDES.map((slide, index) => (
              <Indicator
                key={slide.key}
                slide={slide}
                isActive={index === state.currentIndex}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </Col>
      </Row>

      <Row className="future">
        <Col>
              <h2 className="future__title">The <span class="future__underline">past</span> is the <span class="future__underline">future</span> of skincare</h2>
        </Col>
      </Row>
    </>
  );
});

export default Introduction;
