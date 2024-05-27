import React from "react"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [err, setErr] = React.useState(null)
  
  const handleBlur = ({target}) => { validateField(target.value) }
  
  function validateField(value, error) {
    if (value.length <= 0) {
      setErr("O campo não pode estar vazio!")
      return false;
    } else if (!/\d{5}-\d{3}/.test(value)) {
      setErr(error)
      return false;
    } else {
      setErr(null)
      return true;
    }
  }

  return (
    <form>
      <label htmlFor="inEmail">E-mail:</label> <br />
      <div>
        <input 
          type="text"
          id="inEmail"
          value={email} 
          onBlur={handleBlur}
          onChange={({target}) => setEmail(target.value)} 
        />
        {err && <p>{err}</p>}
        <button className="btnSend">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Login;