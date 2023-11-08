import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
      {username === null ? (
        <div>No user selected</div>
      ) : (
        <>
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      )}
      <button onClick={() => setUsername(null)}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
