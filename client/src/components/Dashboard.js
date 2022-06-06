import React, { useEffect, useState} from 'react'
import axios from "axios"
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [organiser, setOrganiser] = useState("");

  // fetching data from server
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/startlistentries");
      setData(result.data)
    };
    fetchData();
  }, []);
  
  
  
  const handleClick = (e) => {
    e.preventDefault();
    setOrganiser(e.target.value);
  }

  
  return (
    <div>
      <Sidebar handleClick={handleClick}/>
      <div>
        {data.filter(filteredData => filteredData.organiserTitle === organiser).map(fd => (
          <li key={fd.id}>{fd.eventTitle}</li>
        ))}
      </div>
      </div>
  );
}


export default Dashboard;