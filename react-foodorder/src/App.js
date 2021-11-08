import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider'

function App() {
  const [isShown, setIsShown] = useState(false);

  const showHandle = () => {
    setIsShown(true);
  }

  const hideHandle = () => {
    setIsShown(false);
  }

  return (
    <CartProvider>
      <Header showHandle={showHandle} />
      {isShown && <Cart hideHandle={hideHandle} />}
      <Meals />

    </CartProvider>
  );
}

export default App;
