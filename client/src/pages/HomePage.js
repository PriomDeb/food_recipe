import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Calories } from "../components/Calories";

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Get Recipes
  const getAllRecipes = async () => {
    try {
      const { data } = await axios.get("/api/v1/recipe/get-recipe");
      setRecipes(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllRecipes();
  }, []);

  // Get recipes by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <Layout>
      <div className="row mt-3">
        <div className="col-md-2">
          <h4 className="text-center">Filter by Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          <h4 className="text-center mt-4">Filter by Calories</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Calories?.map((cal) => (
                <div key={cal._id}>
                  <Radio value={cal.array}>{cal.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
        </div>

        <div className="col-md-9">
          {/* {JSON.stringify(checked, null, 4)} */}
          {/* {JSON.stringify(radio, null, 4)} */}
          <h1 className="text-center">All Recipes</h1>
          <div className="d-flex flex-wrap">
            {recipes?.map((r) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/recipe/recipe-image/${r._id}`}
                  className="card-img-top"
                  alt={r.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <p className="card-text">{r.description}</p>
                  <button class="btn btn-primary ms-1">See Recipe</button>
                  <button class="btn btn-secondary ms-1">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
