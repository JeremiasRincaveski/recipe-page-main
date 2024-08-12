import { StyledNutricao } from "./nutricao.styled";

const Nutricao = ({nutricao}) => {
  return (
    <StyledNutricao>
      <h2>Nutricion</h2>
      <p>{nutricao.descricao}</p>
      <table>
        <tbody>
          {nutricao.tabela && (
            Object.keys(nutricao.tabela).map(item => {
              const descricao = nutricao.tabela[item]
              return (
                <tr key={item}>
                  <th>{item}</th>
                  <td>{descricao}</td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </StyledNutricao>
  )
}

export default Nutricao;