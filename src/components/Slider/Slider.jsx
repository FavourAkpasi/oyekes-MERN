import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sliderData } from "../../Data.js";
import { useEffect, useState } from "react";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.side === "left" && "1rem"};
  right: ${(props) => props.side === "right" && "1rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 55%;
`;
const Title = styled.h1`
  font-size: clamp(3rem, 5rem, 7rem);
  color: #fff;
  font-family: "Zilla Slab Highlight", cursive;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  background-color: hotpink;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const Slider = () => {
  const navigate = useNavigate();
  const timeoutRef = React.useRef(null);

  const [slideIndex, setSlideindex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideindex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideindex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideindex((prevIndex) =>
          prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  return (
    <Container>
      <Arrow side="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderData.map((slide) => (
          <Slide key={slide.id}>
            <Image src={slide.img} />
            <InfoContainer>
              <Title>{slide.desc}</Title>
              <Button
                onClick={() => {
                  navigate(`${slide.link}`);
                }}
              >
                {slide.btn}
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow side="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
