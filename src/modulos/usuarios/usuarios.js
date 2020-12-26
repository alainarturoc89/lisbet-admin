import * as React from "react";
import { Filter, List, SimpleList, Datagrid, TextField, EmailField, UrlField, EditButton, Edit, SimpleForm, TextInput, ReferenceInput, Create, SelectInput } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const UserFilter = (props) => (

    <Filter {...props}>

        <TextInput label="Buscar" source="q" alwaysOn />

        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>

            <SelectInput optionText="name" />

        </ReferenceInput>

    </Filter>

);

export const UserList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (<List filters={<UserFilter />} {...props}>

        {isSmall

            ? (<SimpleList
                primaryText={record => record.name}
                secondaryText={record => `${record.views} views`}
                tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />)

            : (<Datagrid rowClick="edit">

                <TextField source="id" />

                <TextField source="name" />

                <TextField source="username" />

                <EmailField source="email" />

                <TextField source="address.street" />

                <TextField source="phone" />

                <UrlField source="website" />

                <TextField source="company.name" />

                <EditButton />

            </Datagrid>)

        }

    </List>);
}

const EditUserTitle = ({ record }) => {

    return <span>Usuario: {record ? `"${record.name}"` : ''}</span>;

};

export const UserEdit = props => (

    <Edit title={<EditUserTitle />} {...props}>

        <SimpleForm>

            <TextInput source="name" />

            <TextInput source="username" />

            <TextInput source="email" />

            <TextInput multiline source="address.street" />

            <TextInput source="phone" />

            <TextInput source="website" />

            <TextInput source="company.name" />

        </SimpleForm>

    </Edit>

);

const CreateUserTitle = ({ record }) => {

    return <span>Nuevo usuario</span>;

};

export const UserCreate = props => (

    <Create title={<CreateUserTitle />} {...props}>

        <SimpleForm>

            <TextInput source="name" />

            <TextInput source="username" />

            <TextInput source="email" />

            <TextInput multiline source="address.street" />

            <TextInput source="phone" />

            <TextInput source="website" />

            <TextInput source="company.name" />

        </SimpleForm>

    </Create>

);