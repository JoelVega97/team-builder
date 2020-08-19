import React from 'react'

export default function TeamMember(props){
    let {details} = props

    if(!details) {
        return <h3>One moment as we add the new Team Member ...</h3>
    }
    debugger 
    return(
        <div>
            <h2>{details.username} </h2>
            <p>Email: {details.email} </p>
            <p>Role: {details.role} </p>
        </div>
    )
}