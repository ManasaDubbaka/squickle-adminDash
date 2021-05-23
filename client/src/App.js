import React from 'react';
import {Admin,Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UserList from './components/UserList'

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
  <Resource name='users' list={UserList}/>
  </Admin>
}

export default App;
