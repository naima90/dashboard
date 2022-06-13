import React, { useEffect, useState} from 'react'
import axios from "axios"
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [organiser, setOrganiser] = useState("");

  // fetching data from server
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/startlistentries");
      setData(result.data)
    };
    fetchData();
  }, []);
  
  
  
  const handleClick = (e) => {
    e.preventDefault();
    setOrganiser(e.target.value);
  }

  const organisorIncome = () => {
    let total = 0
    data.filter(filteredData => filteredData.organiserTitle === organiser).map(fd => (
          total += fd.ticketPrice.value
          ))
          return total

  }

  const organisorEvents = () => {
    return data.filter(filteredData => filteredData.organiserTitle === organiser).map(fd => (
          fd.eventTitle
          ))
    
  }

  
  return (
    <div>
      <Sidebar handleClick={handleClick}/>
      <div>
      <>{organisorEvents().map(events => <li>{events}</li>)}</>
      {organisorIncome()}
      </div>
      </div>
  );
}


export default Dashboard;