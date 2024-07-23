import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
  margin-left: 20px;
`;

const RowTitle = styled.h2`
  color: #fff;
`;

const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
`;

const RowPoster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 150px;
  margin-right: 10px;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
  }
`;

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(fetchUrl);
      const data = await request.json();
      setMovies(data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowPosters>
        {movies.map(movie => (
          <RowPoster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </RowPosters>
    </RowContainer>
  );
}

export default Row;
