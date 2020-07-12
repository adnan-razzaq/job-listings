import React, { useState, useEffect } from "react";
import JobBoardComponent from "./Components/JobBoardComponent";
import data from "./assests/data/data.json";

function App() {
  const [jobs, setjobs] = useState([]);
  const [filtered, setfiltered] = useState([]);
  useEffect(() => {
    setjobs(data);
  }, []);

  const filteredjobs = jobs.filter((job) => {
    const { role, level, languages, tools } = job;
    const tages = [role, level, ...languages, ...tools];

    if (filtered.length === 0) {
      return true;
    } else {
      return tages.some((tage) => filtered.includes(tage));
    }
  });

  const handleclick = (tag) => {
    if (filtered.includes(tag)) return;
    setfiltered([...filtered, tag]);
  };
  const handleclear = () => {
    setfiltered([]);
  };

  return (
    <div className="app ">
      <header className="bg-teal-500 transition-opacity">
        <img src="./images/bg-header-desktop.svg" alt="heheh" />
      </header>
      <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded">
        {filtered.length > 0 &&
          filtered.map((filter, index) => (
            <span
              className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded"
              onClick={handleclear}
              key={index}
            >
              {filter}
              <span className="bg-teal-500 text-teal-200 m-2">close</span>
            </span>
          ))}
      </div>

      {jobs.length === 0 ? (
        <p>data is being loaded</p>
      ) : (
        filteredjobs.map((job) => (
          <JobBoardComponent key={job.id} job={job} handleclick={handleclick} />
        ))
      )}
    </div>
  );
}

export default App;
