// #TODO: Arrumar os arquivos pra fazer o upload no repo oficial

const Hello = ({ name, age }) => {
  // console.log(props)
  return (
    <div>
      {/* <p>Olá, mundo!</p> */}
      <p>
        Olá {name}, você tem {age} anos
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const amigos = [
    { nome: 'Peter', idade: 4 },
    { nome: 'Maya', idade: 10 }
  ]
  return (
    <>
      <h1>Olá a todos!</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <div>
        {/* Erro, impossível renderizar objetos desse jeito 
        <p>{amigos[0]}</p>
        <p>{amigos[1]}</p> */}
        <p>
          {amigos[0].nome} {amigos[0].idade}
        </p>
        <p>
          {amigos[1].nome} {amigos[1].idade}
        </p>
      </div>
    </>
  )
}

// const App = () => {
//   const hoje = new Date()
//   const a = 10
//   const b = 20
//   console.log(hoje, a + b)
//   return (
//     <div>
//       <p>Olá, mundo! Hoje é {hoje.toString()}</p>
//       <p>
//         {a} mais {b} é {a + b}
//       </p>
//     </div>
//   )
// }

export default App
