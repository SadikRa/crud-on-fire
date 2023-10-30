
import './App.css'

function App() {
  
  const handleSubmit = event => {
    event.preventDefault();
        const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {email, password}
    console.log(email, password)
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(data => console.log(data))

}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>email</p>
          <input name='email' type="text" placeholder='email' />
          <p>password</p>
          <input type="password" name='password' placeholder='password' />
          <br /> <br />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App
