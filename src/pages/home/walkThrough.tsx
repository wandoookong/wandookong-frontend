import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import { colors } from "../../styles/colors";
import { SingleButton } from "../../components/buttons/singleButton";
import { useRef, useState } from "react";

export default function WalkThrough({ onClick }) {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => {
      setSlideIndex(index);
    },
  };

  const onNextHandler = () => {
    if (slideIndex === 2) {
      return onClick();
    }
    // @ts-ignore
    sliderRef.current.slickNext();
  };

  return (
    <Container>
      <button className="close-button" onClick={onClick}>
        건너뛰기
      </button>
      <Slider ref={sliderRef} {...settings}>
        <div className="slider-item-wrapper">
          <img
            width="186px"
            src={step1}
            alt="함께 사이드 프로젝트를 하고 싶은 직군만 있다면 팀원을 빠르게 모집할 수 있습니다."
          />
          <h3>함께 사이드 프로젝트하고 싶은 직군만 있다면</h3>
          <strong>팀원 모집이 빠르게 가능하고</strong>
        </div>
        <div className="slider-item-wrapper">
          <img
            width="196px"
            src={step2}
            alt="함께 사이드 프로젝트를 하고 싶은 직군만 있다면 팀원을 빠르게 모집할 수 있습니다."
          />
          <h3>언제 어디서나 나의 성향과 맞는 팀원을</h3>
          <strong>손쉽게 찾을 수 있습니다</strong>
        </div>
        <div className="slider-item-wrapper">
          <img
            width="320px"
            src={step3}
            alt="함께 사이드 프로젝트를 하고 싶은 직군만 있다면 팀원을 빠르게 모집할 수 있습니다."
          />
          <div className="text-wrapper">
            <strong>이젠, 완두콩으로 더욱 쉽고 재밌게</strong>
            <strong>사이드 프로젝트 팀원을 찾아보세요</strong>
          </div>
        </div>
      </Slider>
      <SingleButton label={slideIndex !== 2 ? "다음" : "시작하기"} onClick={onNextHandler} isActive={true} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${colors.background};
  text-align: center;
  z-index: 998;

  .slick-dots li {
    margin: 0;
  }

  button.close-button {
    position: absolute;
    top: 49px;
    right: 20px;
    background: none;
    border: none;
    font-weight: 700;
    font-size: 13px;
    color: ${colors.grey900};
    z-index: 990;
    cursor: pointer;
  }

  div.slider-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 120px;
    margin-bottom: 48px;

    img {
      display: inline-block;
      margin-bottom: 44px;
    }

    h3 {
      margin-bottom: 5px;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: ${colors.grey900};
    }
    strong {
      font-size: 16px;
      line-height: 23px;
      color: ${colors.grey900};
      font-weight: 700;
    }

    div.text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
