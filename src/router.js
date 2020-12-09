import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
import Contact from './components/Contact/Contact'
import History from './components/History/History'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/classlist/:class' component={ClassList} />
        <Route exact path='/student/:id' component={Student} />
        <Route exact path='/about/history' component={History} />
        <Route exact path='/about/contact' component={Contact} />
    </Switch>
)
