import { StyledTimer } from "./timer.styled"

const Timer = ({ tempo }) => {
  return (
    <StyledTimer>
      <h2>Preparation time</h2>
      <div className="wrapper">
        {tempo && (
          <ul>
            {Object.keys(tempo).map(temp => {
              return (
                <li key={temp}><span>{temp}: </span>{tempo[temp]}</li>
              )
            })}
          </ul>
        )}
      </div>
    </StyledTimer>
  )
}

export default Timer;