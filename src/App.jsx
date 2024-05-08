import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import NavBar from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/item-list-container/ItemListContainer.jsx'
import ItemCount from './components/item-count/ItemCount.jsx';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Gamer Squad'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad del producto", quantity)}/>
    </div>
    
  )
}

export default App
