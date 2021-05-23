import React from 'react'
import { List,Datagrid,Responsive,SimpleList,DateField,TextField, ReferenceField, ShowButton } from 'react-admin'


const UserList = (props) => {
    return <List {...props} >
       <Responsive
        small={
          <SimpleList linkType="show" primaryText={record => record.user} />
        }
        medium ={
       <Datagrid>
         
         <DateField source="date"/>
           <TextField  label="User Id" source="id" />

           <ReferenceField label="User" source="id" reference="users" link="edit" >
          <TextField source="name" /> 
          </ReferenceField>
          
          
           <TextField label="Email" source="email" />
           <TextField source="phone" />
            <ShowButton source="User History" label="User History"/>
       </Datagrid>
        }
       />
        </List>
    
}

export default UserList;