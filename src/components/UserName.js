import { useQuery } from '@apollo/client';
import { GET_USERNAME } from '../utils/queries';

export default function UserName () {
  const { loading, error, data } = useQuery(GET_USERNAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="userName">{data.getDoritosLotbUser.username}</div>
  )
}
