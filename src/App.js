import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { i18nProvider } from "./config/languages";
import AuthProvider from "./modulos/authProvider";
import Dashboard from "./modulos/dashboard";
import { UserList, UserEdit, UserCreate } from "./modulos/usuarios/usuarios";
import { PublicationList, PublicationEdit, PublicationCreate } from "./modulos/publicaciones/publicaciones";
import jsonServerProvider from 'ra-data-json-server';
import PublicationIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = [];// jsonServerProvider('https://jsonplaceholder.typicode.com');

//import dataProvider from './modulos/dataProvider';

const App = () => (

  <Admin i18nProvider={i18nProvider} authProvider={AuthProvider} dashboard={Dashboard} dataProvider={dataProvider} >

    <Resource name="posts" list={PublicationList} edit={PublicationEdit} create={PublicationCreate} icon={PublicationIcon} />

    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />

  </Admin >

);

export default App;
