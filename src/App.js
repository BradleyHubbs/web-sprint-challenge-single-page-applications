import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import axios from 'axios'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('name is required').min(2, 'name must be at least 2 characters long'),
  size: yup.string().oneOf(['small', 'medium', 'large'], 'Size Is Required'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  meatball: yup.boolean(),
  onion: yup.boolean(),
  instructions: yup.string()
})

//STOP RIGHT HERE

const initialFormValues = {
  name:'',
  size: '',
  pepperoni: false,
  sausage: false,
  meatball: false,
  onion: false,
  instructions: ''
}

const App = () => {
const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(true)
const [errors, setErrors] = useState({  name:'',
size: '',
pepperoni: false,
sausage: false,
meatball: false,
onion: false,
instructions: ''})

const setFormErrors = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(() => setErrors({ ...errors, [name]: ''}))
  .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
}

const change = event => {
  const { checked, value, name, type } = event.target
  const valueToUse = type === 'checkbox' ? checked : value
  setFormErrors(name, valueToUse)

  setFormValues({...formValues, [name]: valueToUse})
}

const submit = event => {
  event.preventDefault();
  console.log('submitted');
  const newForm = {
    name: formValues.name.trim(),
    size: formValues.size,
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    meatball: formValues.meatball,
    onion: formValues.onion,
    instructions: formValues.instructions.trim(),
  }
  axios.post('https://reqres.in/api/users', newForm)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  setFormValues(initialFormValues)
}

useEffect(() => {
  schema.isValid(formValues).then(valid=> setDisabled(!valid))
}, [formValues])

  return (
    <div className='app'>
      
      <nav>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/Pizza'>Order Pizza!</Link>
        </div>
      </nav>
      <Switch>

        <Route path='/Pizza'>
          <Pizza values={formValues} change={change} submit={submit} disabled={disabled} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>

    
    </div>
  );
};
export default App;
