import * as React from "react";
import { Admin, Resource } from 'react-admin';
import AuthProvider from "./modulos/authProvider";
import Dashboard from "./modulos/dashboard";
import { UserList } from "./modulos/usuarios/usuarios";
import { PublicationList, PublicationEdit, PublicationCreate } from "./modulos/publicaciones/publicaciones";
import jsonServerProvider from 'ra-data-json-server';
import PublicationIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//import dataProvider from './modulos/dataProvider';

const App = () => (

  <Admin authProvider={AuthProvider} dashboard={Dashboard} dataProvider={dataProvider} >

    <Resource name="posts" list={PublicationList} edit={PublicationEdit} create={PublicationCreate} icon={PublicationIcon} />

    <Resource name="users" list={UserList} icon={UserIcon} />

  </Admin >

);

export default App;
