import React from 'react';
import { ListActions } from '../actions/ListActions';
import { TextField, List, Datagrid, ReferenceField, EditButton, ShowButton, DateField, FunctionField} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    row: {
       fontSize: '1.25em'
    }

});

export const ProjectsList = props => {
    const classes = useStyles();
    return (
        <List className = {classes.headers} actions = {<ListActions title = 'Projects'/>}  {...props}>
            <Datagrid> 
                <TextField source = 'operatingCompany.name' label = 'Operating Company' />
                <FunctionField label = 'Total Budget' 
                    render = {record => `$${ (parseFloat(record.purchaseLandAndBuilding) + parseFloat(record.tenantImprovement) 
                                        + parseFloat(record.eligibleFees)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}` } 
                />
                <TextField source = 'city' />
                <DateField source = 'createdAt' />
                <DateField source = 'updatedAt' />
                <EditButton />
                <ShowButton label="View Report" icon={<DescriptionIcon/>}/>
            </Datagrid>
         </List>
    )
}
