import React from 'react';
import styled from 'styled-components';
import removeButton from './icons/cancel.svg';
import editButton from './icons/person.svg';

const RemoveButton = styled.button`
padding-left: 20px;
align-self: center;
width: 32px;
height: 32px;
background-color: transparent;
background-image: url('${removeButton}');
background-size: 100% 100%;
border: 0;
color: black;
font-size: 0;
vertical-align: middle;
cursor: pointer;
outline: none;`;

const EditButton = styled.button`
padding-left: 20px;
align-self: center;
width: 32px;
height: 32px;
background-color: transparent;
background-image: url('${editButton}');
background-size: 100% 100%;
border: 0;
color: black;
font-size: 0;
vertical-align: middle;
cursor: pointer;
outline: none;`;

const size = {
    desktopL:'600px'
}

const device = {
    desktopL:`(min-width: ${size.desktopL})`
}

const StyledLi = ({ className, children }) => (
    <li className={className}>{ children}</li>
)

const CustomStyledLi = styled(StyledLi)`
padding: 20px;
background: white;
display:flex;
@media ${device.desktopL} {
    margin: 20px;
    border: 1px solid #d5d8f;
    border-radius: 4px;
}
`;

const EmployeeItem = ({ employee, onDeleteEmployee, onEditEmployee }) => (
    <CustomStyledLi>
        <div class='employee-details'>
            <p>{employee.name}</p>
            <p>{employee.salary}</p>
            <p>{ employee.position }</p>
         </div>
        <RemoveButton onClick={() => onDeleteEmployee(employee)} >Delete</RemoveButton>
        <EditButton onClick={() => onEditEmployee(employee)} >Edit</EditButton>
        {/*<button className = 'employee-remove' >Delete</button>*/}
    </CustomStyledLi>
 )

export default EmployeeItem;