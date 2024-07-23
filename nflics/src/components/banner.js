import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.header`
  position: relative;
  height: 448px;
  color: white;
  object-fit: contain;
  background-size: cover;
  background-image: url('https://image.tmdb.org/t/p/original/kqjL17yufvn9OVLyXYpvtyrFfak.jpg');
  background-position: center center;
`;

const BannerContents = styled.div`
  position: absolute;
  top: 30%;
  left: 30px;
  width: 35%;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerDescription = styled.h1`
  width: 75%;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  max-width: 360px;
  height: 80px;
`;

const BannerButtons = styled.div``;

const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerContents>
        <BannerTitle>Movie Title</BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </BannerButtons>
        <BannerDescription>
          This is a brief description of the movie. This is a brief description of the movie.
        </BannerDescription>
      </BannerContents>
    </BannerContainer>
  );
}

export default Banner;
