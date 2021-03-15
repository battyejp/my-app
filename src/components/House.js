import './house.css';

function House(props) {
  return (<div>
    <h3>{props.house.name}</h3>
    <ul>
      {props.house.students.map(student => <li className="fade-in">{student}</li>)}
    </ul>
  </div>);
}

export default House;