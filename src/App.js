import './App.css';
import Logo from './componentes/Logo';
import Perfil from './imagens/perfil.svg';
import Sacola from './imagens/sacola.svg';

const textoOpcoes = ['Categorias', 'Minha Estante', 'Favoritos'];
const icones = [Perfil, Sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map((texto, index) => (
            <li key={index} className='opcao'><p>{texto}</p></li>
          ))}
        </ul>

        <ul className='icones'>
          {icones.map((icone, index) => (
            <li key={index} className='icone'><img src={icone} alt="Ícone" /></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
