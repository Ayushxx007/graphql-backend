import { gql } from "@apollo/client";
import { useQuery,useMutation } from "@apollo/client/react";



const GET_USERS = gql`
  query {
    getUsers{
      id,name,isMarried,age
    }
  }

`;

const CREATE_USER = gql`
  mutation CreateUser($id: ID!, $name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(id: $id, name: $name, age: $age, isMarried: $isMarried) {
      id
      name
      age
      isMarried
    }
  }
`;

function AddUser(){

  const [createUser] = useMutation(CREATE_USER);



  const handleAdd = () => {
    createUser({
      variables: {
        id:  crypto.randomUUID(),
        name: "Vikas",
        age: 26,
        isMarried: false,
      },
    });
  };
  


  return(<div>
     <button onClick={handleAdd}>Add User</button>;
  
     </div>)

}



function DisplayLocations() {
  const { loading, error, data } = useQuery( GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getUsers.map(({ id, name, age,isMarried }) => (
    <div key={id}>
      <h3>{name}</h3>
     <p>{age}</p>
      <p>{isMarried}</p>
    </div>
  ));
}



const App = () => {
  return (
    <div>
      <h1>Users</h1>
      <DisplayLocations />
      <AddUser />
    </div>
  )
}



  

export default App
