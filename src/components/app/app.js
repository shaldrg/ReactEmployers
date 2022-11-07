import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
        console.log(employees);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [employees]);
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployersList data={employees} />
        <EmployersAddForm />
      </div>
    </div>
  );
}

export default App;
