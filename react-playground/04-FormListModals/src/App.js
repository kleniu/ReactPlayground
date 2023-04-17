import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import DisplayUsers from './components/Users/DisplayUsers'

function App() {
  const [users, setUsers] = useState([]); 

  const addUserHandler = ( userName, userAge) => {
    setUsers( (currentUsers) => [...currentUsers,{ id: Math.random().toString() , username: userName, age: userAge}]);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <DisplayUsers users={users} />
    </div>
  );
}

export default App;
