import React, { createContext, useState } from 'react';

// membuat context
const UserContext = createContext([]);

// membuat Provider
const ProviderUser = (props) => {
  // menggunakan state untuk menyimpan data
  const [user, setUser] = useState([]);

  // data yang akan digunakan didalam state
  let data = {
    user, //get user
    setUser //set user
  }

  return (
    <UserContext.Provider value={data}>
      {props.children}
    </UserContext.Provider>
  )
}

export {
  UserContext,
  ProviderUser,
}