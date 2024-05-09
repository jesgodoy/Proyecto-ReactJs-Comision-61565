import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/item-list-container/ItemListContainer.jsx'

import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
    
  )
}

export default App
