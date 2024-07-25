import Piechart from "./components/Piechart";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import React from "react";


function App() {
  const [repos, setRepos] = useState(null); //useState referenceni manzilini saqlaydi:
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState(null);

  const getData = (Username) => {
    fetch(`https://api.github.com/users/${Username}/repos`)
      .then((data) => data.json())
      .then((repos) => setRepos(repos));
  };

  useEffect(() => {
    if (repos) {
      const data = repos.reduce((acc, curVaL) => {
        const { language } = curVaL;
        const {repository} = curVaL
        try {
          if (!acc[language]) {
            throw new Error("error");
          } else {
            acc[language] += 1;
          }
        } catch {
          acc[language] = 1;
        }


        try {
          if (!acc[repository]) {
            throw new Error("error");
          } else {
            acc[repository] += 1;
          }
        } catch {
          acc[repository] = 1;
        }
        return acc;
      }, {});

      const keys = Object.keys(data);
      const values = Object.values(data);

      setCategories(keys);
      setData(values);
    }
  }, [repos]);

  return (
    <div className="max-w-5xl mx-auto  p-10">
      <h1 className="text-3xl mb-10">Chart Github</h1>
      <Form getData={getData} />
      <div>
        {categories && data && <Piechart categories={categories} data={data} />}
      </div>
    </div>


  );
}

export default App;
