import React from 'react'

export default function Form(props){
    let {value, update, submit} = props

    const change = function(e){
        const {name, value} = e.target
        update(name, value)
    }

    const submission = function(e){
        e.preventDefault()
        submit()
    }

    return (
        <form className = 'top-container' onSubmit = {submission}>
            <div>
                <h2>Add a team member</h2>
                <button disabled = {value.username && value.email && value.role ? false : true}>Submit</button>
            </div>

            <div className = 'form-inputs'>
                <h4>Team Member Information</h4>
                <label>Username: 
                    <input
                        value = {value.username}
                        onChange = {change}
                        name = 'username'
                        placeholder = 'Type Username'
                        type = 'text'      
                    />  
                 </label>

                 <label> Email :
                     <input
                       value = {value.email}
                       onChange = {change}
                       name = 'email'
                       placeholder = 'Type Email'
                       type = 'email'
                     />
                 </label>

                 <label>
                     <select onChange = {change} value = {value.role} name = 'role'>
                        <option value = ''>Choose a choice</option>
                        <option value = 'Pokemon'>Pokemon</option>
                        <option value = 'Gym Leader'>Gym Leader</option>
                        <option value = 'League Champion'>League Champion</option>
                     </select>
                 </label>
            </div>

        </form>
    )
}