import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Testimonios de jugadores sobre "La Liga"</h1>
        <Testimonio 
        nombre="Lionel Andrés Messi Cuccittini"
        pais="Rosario, Argentina"
        imagen="messi"
        cargo="Futbolista"
        empresa="Integrante del Paris Saint-Germain de la Ligue 1 de Francia"
        palabrasRelevantes="El fútbol español"
        testimonio=" es una verdadera pasión que se respira en cada rincón del país. Desde el primer día que llegué a Barcelona, me di cuenta de la grandeza de esta liga y del fervor con el que los aficionados viven el deporte. La rivalidad entre los equipos es intensa y emocionante, lo que se traduce en partidos vibrantes que mantienen a todos en vilo hasta el último minuto." />
        <Testimonio 
        nombre="Cristiano Ronaldo dos Santos Aveiro"
        pais="Funchal, Portugal"
        imagen="cristiano"
        cargo="Futbolista"
        empresa="Integrante del Al-Nassr F de la Liga Profesional Saudi."
        palabrasRelevantes="El fútbol español"
        testimonio=" me ha permitido alcanzar logros increíbles y batir récords históricos. He tenido el honor de ganar múltiples títulos con el Real Madrid y de contribuir al éxito del equipo. La pasión y el compromiso de los aficionados españoles han sido una motivación constante para superarme y dar siempre lo mejor de mí." />
        <Testimonio
        nombre="Radamel Falcao García Zárate"
        pais="Santa Marta, Colombia"
        imagen="falcao"
        cargo="Futbolista"
        empresa="Integrante del Rayo Vallecano de Madrid de la Primera División de España"
        palabrasRelevantes="El fútbol español"
        testimonio=" me ha permitido alcanzar metas y dejar mi huella. Pude vivir momentos de gloria y éxito, tanto a nivel individual como colectivo. El apoyo de los aficionados y la pasión del juego español me han dado la fuerza y la determinación para superar obstáculos y lograr grandes cosas. Estoy orgulloso de haber sido parte de la historia del fútbol español." />
      </div>
    </div>
  );
}

export default App;
