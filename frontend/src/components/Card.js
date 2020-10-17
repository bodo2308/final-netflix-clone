import React from "react";
import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";
import { generateMedia } from "styled-media-query";



const Card = ({ statement, index }) => {
  if (index === 1) {
    return (
      <CardContainer>
        <div className="card-animation" style={{ margin: "3rem 1.5rem 0" }}>
          <HoverVideoPlayer
            className="left-player"
            videoSrc={statement.video}
          />
        </div>

        <div className="card-text">
          <Title>{statement.title}</Title>
          <Content>{statement.content}</Content>
        </div>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <div className="card-text">
        <Title>{statement.title}</Title>
        <Content>{statement.content}</Content>
      </div>

      <div className="card-animation">
        <HoverVideoPlayer className="player" videoSrc={statement.video} />
      </div>
    </CardContainer>
  );
};

export default Card;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 3.7rem;
  font-weight: 700;
  line-height: 1.1em;
  text-align: left;
  ${customMedia.lessThan("mdDesktop")`
    font-size: 1.8rem;
    text-align: center;
    width:80%;
  `}
`;

const Content = styled.h2`
  margin: 0 0 1.2rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5em;
  text-align: left;
  padding-left: 3rem;
  ${customMedia.lessThan("mdDesktop")`
  text-align: center;
    font-size: 1.3rem;
    width:80%;
  `}
`;

const CardContainer = styled.footer`
  display: flex;
  background: var(--main-deep-dark);
  padding-top: 5rem;
  padding-bottom: 3rem;
  padding-left: 10rem;
  width: 100%;
  height: 60vh;
  padding-right: 10rem;
  color: #fff;
  margin: 0.7rem auto 0;
  ${customMedia.lessThan("mdDesktop")`
    height:80vh !important;
    display:block
  `}

  .card-text {
    padding-left: 3%;
    width: 130%;
    margin: 3rem auto 0;
    ${customMedia.lessThan("mdDesktop")`
    padding-left: 0;
    margin-top:0
  `}
  }

  .card-animation {
    padding-left: 10%;
    width: 100%;
    padding-bottom: 10%;
    ${customMedia.lessThan("tablet")`
    margin:5rem 2rem 2rem;
    
  `}
  }

  .player {
    ${customMedia.lessThan("mdDesktop")`
   
    width:50%%;
    margin: 1rem 5rem;
    padding-bottom:10rem
  `}
    ${customMedia.lessThan("tablet")`
    height:80%;
    width:150%%;
    margin: 1rem 2rem;
  `}

  .left-player {
    ${customMedia.lessThan("mdDesktop")`
   
    width:60% !important ;
    margin: 1rem 5rem;
    padding-bottom:10rem
  `}
    ${customMedia.lessThan("tablet")`
    height:80%;
    width:150%%;
    margin: 1rem 2rem;
  `}
`;
