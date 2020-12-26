import * as React from "react";
import { Filter, List, SimpleList, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, Create } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PublicationFilter = (props) => (

    <Filter {...props}>

        <TextInput label="Buscar" source="q" alwaysOn />

        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>

            <SelectInput optionText="name" />

        </ReferenceInput>

    </Filter>

);

export const PublicationList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (<List filters={<PublicationFilter />} {...props}>

        { isSmall
            ? (<SimpleList
                primaryText={record => record.title}
                secondaryText={record => `${record.views} views`}
                tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />
            )

            : (<Datagrid rowClick="edit">

                <TextField source="id" />

                <ReferenceField source="userId" reference="users">

                    <TextField source="name" />

                </ReferenceField>

                <TextField source="title" />

                <EditButton />

            </Datagrid>)}

    </List>);
};

const EditPublicationTitle = ({ record }) => {

    return <span>Publicación: {record ? `"${record.title}"` : ''}</span>;

};

export const PublicationEdit = props => (

    <Edit title={<EditPublicationTitle />} {...props}>

        <SimpleForm>

            <ReferenceInput source="userId" reference="users">

                <SelectInput optionText="name" />

            </ReferenceInput>

            <TextInput source="title" />

            <TextInput multiline source="body" />

        </SimpleForm>

    </Edit>

);

const CreatePublicationTitle = ({ record }) => {

    return <span>Nueva publicación</span>;

};

export const PublicationCreate = props => (

    <Create title={<CreatePublicationTitle />} {...props}>

        <SimpleForm>

            <ReferenceInput source="userId" reference="users">

                <SelectInput optionText="name" />

            </ReferenceInput>

            <TextInput source="title" />

            <TextInput multiline source="body" />

        </SimpleForm>

    </Create>

);