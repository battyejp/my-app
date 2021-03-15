import './house.css';

function House(props) {
  return (<div>
    <h3>{props.name}</h3>
    <ul>
      {props.students.map(student => <li className="fade-in">{student}</li>)}
    </ul>
  </div>);
}

export default House;