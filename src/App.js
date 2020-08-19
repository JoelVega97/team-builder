import React, {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'
import Form from './components/Form'
import TeamMember from './components/TeamMember'



//Fake team member API

const initialTeamMember = [
  {
    id: uuid(),
    username: 'Jon Jaffari',
    email: 'WHATEVER@BLAH.COM',
    role: 'The Very Best'
  }
]

const initialValues = {
    //TEXT VALUES
  username: '',
  email: '',
  //DROPDOWN
  role: '',

}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamMember })
}
const fakeAxiosPost = (url, { username, email, role }) => {
  const newTeamMember = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}


function App() {

  const [teamMembers, setTeamMembers] = useState([])
  const [values, setValues] = useState(initialTeamMember)

  const update = (nUpdate, vUpdate) => {
    setValues({...values, [nUpdate]: vUpdate})
  }

  const submit = () => {

    const teamMember = {

      username: values.username.trim(),
      email: values.email.trim(),
      role: values.role.trim(),
      
    }
    
      if(!teamMember.username || !teamMember.email || !teamMember.role)
      return

    fakeAxiosPost('notreal.com', teamMember)
      .then(function(res){
        setTeamMembers([...teamMembers, res.data])
      })

      .catch(err => {
        console.log('UH OH STINKY')
      })

      .finally(() => {
        setValues(initialValues)
      })

  }

  useEffect(() => {
    fakeAxiosGet('notrealAPI.com').then(res => setTeamMembers(res.data))
  }, [])

  return (
    <div className="Container">
        <h1>Team Builder App</h1>
        {/*This is where the <Form.JS is after i build it here*/}


        {
          teamMembers.map(teamMember => {
            return (
              <TeamMember key = {teamMember.id} details = {teamMember} />
            )
          })
        }
    </div>
  );
}

export default App;
