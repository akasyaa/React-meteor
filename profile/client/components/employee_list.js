import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {
    return (
        <div>
            <div className="employee-list">
                List
            </div>
        </div>
    )
}

export default createContainer(() => {
    Meteor.subscribe('employees');

    return { employees: Employees.find({}).fetch() };
}, EmployeeList);
