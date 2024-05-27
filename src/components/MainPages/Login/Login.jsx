import React from "react"
import { Input } from "./LoginStyle"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [err, setErr] = React.useState(null)
  
  const handleBlur = ({target}) => { validateField(target.value) }
  
  function validateField(value) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

    if (value.length <= 0) {
      setErr("O campo não pode estar vazio!")
      return false;
    } else if (!emailRegex.test(value)) {
      setErr("Verifique o E-mail e o preencha corretamente.")
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
        <Input
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