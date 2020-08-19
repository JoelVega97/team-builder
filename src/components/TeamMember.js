import React from 'react'
import styled from 'styled-components'

let StyledDiv = styled.div`

background-color: #FFF3B0;
margin: 5% 25%;
padding: 1% 0;
border: solid 5px #223127 ;
border-radius: 10px ;


`

export default function TeamMember(props){
    let {details} = props

    if(!details) {
        return <h3>One moment as we add the new Team Member ...</h3>
    }
 
    return(
        <StyledDiv className = 'tmcard'>
            <h2>{details.username} </h2>
            <p>Email: {details.email} </p>
            <p>Role: {details.role} </p>
        </StyledDiv>
    )
}