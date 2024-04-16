import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import NavBar from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/item-list-container/ItemListContainer.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Gamer Squad'} />
    </div>
    
  )
}

export default App
