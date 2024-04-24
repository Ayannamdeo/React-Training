import React from 'react';
import {gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
      }
    }
  }
`;

export function Q9(){
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { info, results } = data.characters;

  console.log("info: ", info);
  console.log("info.next.page", info.next.page);
  const loadMore = () => {
    fetchMore({
      variables: { page: info.next ? info.next: 1 },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          characters: {
            info: fetchMoreResult.characters.info,
            results: [...prevResult.characters.results, ...fetchMoreResult.characters.results]
          }
        };
      }
    });
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {results.map((character) => (
          <li key={character.id}>
            <strong>Name:</strong> {character.name} - 
            <strong>Species:</strong> {character.species}
          </li>
        ))}
      </ul>
      {info.next && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

