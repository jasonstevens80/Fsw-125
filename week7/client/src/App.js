import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/data/Header/Header";
import Content from "./components/data/Content/Content"
import Form from "./components/data/Form/Form"
import Footer from "./components/data/Footer/Footer";
import "./styles.css";

export default function App() {
  const [capital, setCapital] = useState([]);
  //displays data
  const getCapitals = () => {
    
    axios
      .get("http://localhost:9000/capitals")
      .then((res) => setCapital(res.data)) // to update state
      .catch((err) => console.log(err)); // in case of an error
  };
  // Search data 
    const searchCapitals = (capital) => {
      axios
        .get(`http://localhost:9000/capitals/search/capital?type=${capital}`)
        .then((res) => setCapital(res.data)) // to update state
        .catch((err) => console.log(err)); // in case of an error
    };
  // add post
  const postCapital = (newCapital) => {
    axios
      .post("http://localhost:9000/capitals", newCapital)
      .then((res) => {
        // setCapital((prevcapital) => [...prevcapital, res.data]);
        getCapitals();
      })
      .catch((err) => console.log(err));
  };
  // Delete post
  const deleteCapital = (capitalId) => {
    axios
      .delete(`http://localhost:9000/capitals/${capitalId}`)
      .then((res) => {
        getCapitals()
        // setCapital((prevcapital) =>
        //   prevcapital.filter((capital) => capital._id !== capitalId)
        //); // returns with smaller array minus the id that was clicked on
      })
      .catch((err) => console.log(err));
  };
  // Put request - needs id and req.body
  const updateCapital = (updates, capitalId) => {
    axios.put(`http://localhost:9000/capitals/${capitalId}`, updates)
      .then((res) => {
        getCapitals()
        // setCapital((prevcapital) =>
        //   prevcapital.map((capital) => capital._id !== capitalId ? capital : res.data)
        // ); //will change if id is not the same otherwise it will change to updated info
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCapitals();
  }, []);
  return (
    <div className="App">
      <Header searchCapitals={searchCapitals}/>
      <Form submit={postCapital} btnText="Submit your player!"/>
      {capital.map((capital) => (
      <Content
          {...capital} // passing id
          position={capital.position}
          key={capital.capital}
          deleteCapital={deleteCapital}
          updateCapital={updateCapital}
        />
      ))}
      <Footer/>
    </div>
  );
}