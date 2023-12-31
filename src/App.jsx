import React, { useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import Navigation from './navigation/Nav'
import Products from './products/Products'
import data from './db/data'
import Recommended from './recommended/Recommended'
import Card from './components/Card'
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  // ------- Input Filter --------
  const [query, setQuery] = useState("")


  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ------- Radio Filter --------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  };

  // ------- Button Filter --------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  };

  const filteredProducts = (data, selected, query) => {
    let filteredData = data

    // Filtering Input Items
    if (query) {
      filteredData = filteredItems
    }

    // Applying selected filter
    if (selected) {
      filteredData = filteredData.filter(({ category, color, company,
        newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      );
    }

    return <>

      {
        filteredData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              item={item}
              img={item.img}
              title={item.title}
              star={item.star}
              reviews={item.reviews}
              quantity={item.quantity}
              prevPrice={item.prevPrice}
              newPrice={item.newPrice}
            />
        ))
      }
    </>
  };

  const result = filteredProducts(data, selectedCategory, query);

  return (
    <>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
