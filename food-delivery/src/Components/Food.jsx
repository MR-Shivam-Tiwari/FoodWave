import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

function Food() {
  const [foodCat, setfoodCat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [search, setsearch] = useState("");

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/fooddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const { dishes, Categories } = responseData;

      setfoodCat(Categories);
      setfooditem(dishes);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearchChange = (e) => {
    setsearch(e.target.value);
  };

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className='container-fluid'>
      {foodCat.length !== 0 &&
        foodCat.map((category) => {
          const filteredItems = fooditem.filter(
            (item) =>
              item?.CategoryName === category?.Categories &&
              item.name.toLowerCase().includes(search.toLowerCase())
          );

          const chunkedItems = chunkArray(filteredItems, 3);

          return (
            <div className="row mb-3" key={category._id}>
              <div className="col-12 mb-3">
                <div className="rounded-4  p-3" style={{background:"#e6e8dd"}}>
                  <div className="fw-bold fs-3 mb-3">{category.Categories}</div>
                  {chunkedItems.map((chunk, index) => (
                    <div className="row" key={index}>
                      {chunk.map((filterItems) => (
                        <div className="col-12 col-md-6 col-lg-4" key={filterItems?._id}>
                          <FoodCard
                            foodName={filterItems?.name}
                            options={filterItems?.options[0]}
                            Img={filterItems?.img}
                            description={filterItems?.description}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Food;
