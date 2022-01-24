import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Child1 } from './Child1'
import { Child2 } from './Child2'

export const HomePage = (props) => {
    console.log(`props`, props)
    return (
        <div>
            <h1>Homepage</h1>
            <nav>
                <Link to="/nested/child1" element={<Child1/>}>Child1</Link> | {""}
                <Link to="/nested/child2" element={<Child2/>}>Child2</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
 