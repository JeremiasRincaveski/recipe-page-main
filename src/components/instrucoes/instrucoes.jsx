import { StyledInstrucoes } from "./instrucoes.styles"

const Instrucoes = ({ instrucoes }) => {
  return (
    <StyledInstrucoes>
      <h2>Instructions</h2>
      <div className="wrapper">
        {instrucoes && (
          <ol>
            {instrucoes.map(instrucao => {
              const [resumo, descricao] = instrucao.split(':')
              return (
                <li key={resumo}><span>{resumo}:</span>{descricao}</li>
              )
            })}
          </ol>
        )}
      </div>
    </StyledInstrucoes>
  )
};

export default Instrucoes;
