import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const [carType, setCarType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!carType) {
        console.error("Please select a car type.");
        return;
      }

      const response = await axios.get("http://localhost:3001/api/carsForm", {
        params: { type: carType },
      });

      if (response.data && response.data.length > 0) {
        setSearchResults(response.data);
      } else {
        console.log("No cars found for the selected type.");
      }
    } catch (error) {
      console.error("Error searching for cars:", error);
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <FormGroup>
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          required
        >
          <option value="">Select car type</option>
          <option value="Sport">Sport</option>
          <option value="Comfort">Comfort</option>
        </select>
      </FormGroup>

      <FormGroup>
        <button type="submit" className="find__car-btn">
          Find Car
        </button>
      </FormGroup>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((car) => (
              <li key={car.id}>
                <Link to={`/cars/${car.carName}`}>{car.carName}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};

export default FindCarForm;
