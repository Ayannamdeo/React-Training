import { gql, useQuery } from "@apollo/client";

const GET_LOCATION = gql`
    query GetLocations {
        country(code: "IN"){
            name
            native
            capital
            emoji
            currency
            languages{
                code
                name
            }
        }
    }`;
    export function Q8(){
    const { loading, error, data } = useQuery(GET_LOCATION);
    const {name, currency, capital, native, emoji, languages} = data?.country || {};

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Question 8: setting up apollo and use graphql</h1>
            <h3>Country: {name}</h3>
            <br />
            <b>About this location: </b>
            <ol>
                <li>Capital is known as: {capital}</li>
                <li>Its symbol is:{emoji}</li>
                <li>Its native is: {native}</li>
                <li>Currency: {currency}</li>
                <br />
                <p>Other languages spoken: </p>
                {languages?.map(lang => (
                    <ol>
                        <li>Language: {lang.name}</li>
                        <li>Code: {lang.code}</li>
                    </ol>
                ))}
            </ol>
        </div>
    );
}