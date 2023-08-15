import { useState, useContext, createContext } from "react";

const MealContext = createContext();

const MealProvider = ({ children }) => {
  const [meal, setMeal] = useState([]);

  return (
    <MealContext.Provider value={[meal, setMeal]}>
      {children}
    </MealContext.Provider>
  );
};

const useMeal = () => useContext(MealContext);

export { useMeal, MealProvider };
