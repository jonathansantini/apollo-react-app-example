import { useQuery } from '@apollo/client';
import { GET_INTEREST_LISTINGS } from '../utils/queries';

export default function InterestListings () {
  const { loading, error, data } = useQuery(GET_INTEREST_LISTINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const listings = data.getDoritosLotbInterestListing.edges;

  return (
    <div className="data-listings">
      <h3>Interest Listings</h3>
      <ul>
      {listings.map( ({ node }) => (
        <li key={node.name}>
          {node.name}
        </li>
      ))}
      </ul>
    </div>
  )
}
