import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import Dashboard from './Index.js'
import TeacherList from './Teacher/Index.js'
import TeacherAdd from './Teacher/Add.js'
import TeacherTrash from './Teacher/Trash.js'
import StudentList from './Student/Index.js'
import StudentAdd from './Student/Add.js'
import StudentTrash from './Student/Trash.js'
import User from './Account/User/Index.js'
// import Admin from './Account/Admin/Index.js'

const pageTitle = {
    dashboard : {
        title : 'Dashboard',
        subtitle : 'Here you can view all activities.',
    },
    teacher : {
        list : {
            title: "Teacher's List",
            subtitle: "View and manage all teacher's data here.",
        },
        add : {
            title: "Add New Data",
            subtitle: 'Here you can store new data.',
        },
        trash : {
            title: 'Recycle Bin',
            subtitle: 'You always can restore your non permanently delete data.',
        }
    },
    student : {
        list : {
            title: "Student's List",
            subtitle: "View and manage all student's data here.",
        },
        add : {
            title: "Add New Data",
            subtitle: 'Here you can store new data.',
        },
        trash : {
            title: 'Recycle Bin',
            subtitle: 'You always can restore your non permanently delete data.',
        }
    },
    account : {
        user : {
            title : 'User Account',
            subtile : 'Here you can change your data'
        },
        admin : {
            title : 'Admin',
            subtitle : 'Manage admin account here'
        }
    }
}

class Content extends Component {

    
    render(){
            return (
                <div className="container-fluid">
                    <Route exact path='/' render={ (props) => <Dashboard title={pageTitle.dashboard} /> }/>

                    <Route path='/teacher/list' render={ (props) => <TeacherList title={pageTitle.teacher.list} /> } />
                    <Route path='/teacher/add' render={ (props) => <TeacherAdd title={pageTitle.teacher.add} /> } />
                    <Route path='/teacher/trash' render={ (props) => <TeacherTrash title={pageTitle.teacher.trash} /> } />

                    <Route path='/student/list' render={ (props) => <StudentList title={pageTitle.student.list} /> } />
                    <Route path='/student/add' render={ (props) => <StudentAdd title={pageTitle.student.add} /> } />
                    <Route path='/student/trash' render={ (props) => <StudentTrash title={pageTitle.student.trash} /> } />

                    <Route path='/user' render={ (props) => <User title={pageTitle.account.user} /> } />
                    {/* <Route path='/admin' render={ (props) => <Admin title={pageTitle.account.admin} /> } /> */}
                    
                </div>
            )
        }
    }

export default Content;
