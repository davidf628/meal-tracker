import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { AddIngredientPage } from './ingredients';
import { RecipeSearchPage } from './recipes';
import { ShoppingListPage } from './shopping-list';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact={true}/>
        <Route path="/add-ingredient" element={<AddIngredientPage />} />
        <Route path="/recipes" element={<RecipeSearchPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
      </Routes>
    </Router> 
  );
}

export default App;
