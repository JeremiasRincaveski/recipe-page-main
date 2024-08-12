import receita from '../../Json'
import Timer from "../../components/timer/timer";
import Ingredientes from "../../components/ingredientes/ingredientes";
import Instrucoes from "../../components/instrucoes/instrucoes";
import Nutricao from "../../components/nutricao/nutricao"
import StyledHome from "./Home.styled";

export const Home = () => {
  const {foto, nome, descricao, ingredientes, instrucoes, nutricao} = receita

  return (
    <StyledHome>
      <img src={foto} alt="Foto da receita" />
      
      <div className="wrapper">
        <h1 className="title">{nome}</h1>
        <p className="description">{descricao}</p>
        
        <Timer tempo={receita.tempo} />
        <Ingredientes ingredientes={ingredientes}/>
        <hr />
        <Instrucoes instrucoes={instrucoes}/>
        <hr />
        <Nutricao nutricao={nutricao}/>
      </div>
    </StyledHome>
  )
};

export default Home;