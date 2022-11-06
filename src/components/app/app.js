import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const data = [
  {
    name: "Sanya",
    salary: 800,
    increase: true,
  },
  {
    name: "artem",
    salary: 1200,
    increase: false,
  },
  {
    name: "edik",
    salary: 1000,
    increase: false,
  },
];

function App() {
  function f1() {
    console.log("555");
  }

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployersList data={data} />
        <EmployersAddForm onClick={f1} />
      </div>
    </div>
  );
}

export default App;
