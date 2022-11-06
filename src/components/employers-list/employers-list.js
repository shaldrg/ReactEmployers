import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";


const EmployersList = ({ data }) => {
  const elements = data.map((el) => {
    return <EmployersListItem name={el.name} salary={el.salary} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
