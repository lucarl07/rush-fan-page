import React from "react"

const Login = () => {
  const [cep, setCep] = React.useState('')
  const [err, setErr] = React.useState(null)
  
  const handleBlur = ({target}) => { validaCep(target.value) }
  
  function validaCep(value) {
    if (value.length <= 0) {
      setErr("O campo não pode estar vazio!")
      return false;
    } else if (!/\d{5}-\d{3}/.test(value)) {
      setErr("Digite um CEP válido, contendo 5 números, 1 hífen (-) e mais 3 números. \nExemplo: 00000-000")
      return false
    } else {
      setErr(null)
      return true
    }
  }

  return (
    <form  style={{
      display: "flex",
      flexDirection: "column",
      width: "350px",
      gap: "5px",
      padding: "3rem"
    }}>
      <label htmlFor="inCEP">CEP:</label> <br />
      <div>
        <input 
          type="text"
          id="inCEP"
          value={cep} 
          onBlur={handleBlur}
          onChange={({target}) => setCep(target.value)} 
        />
        {err && <p>{err}</p>}
        <button className="btnSend" style={{ width: "75px" }}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Login;