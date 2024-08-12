import { StyledIngredientes } from "./ingredientes.styles";

const Ingredientes = ({ ingredientes }) => {
  return (
    <StyledIngredientes>
      <h2>Ingredients</h2>
        <div className="wrapper">
          {ingredientes && (
            <ul>
              {ingredientes.map(item => <li key={item}>{item}</li>)}
            </ul>
          )}
        </div>
    </StyledIngredientes>
  );
};

export default Ingredientes;