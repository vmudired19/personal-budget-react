import './App.scss';


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import AboutPage from './AboutPage/Aboutpage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from './Charts/Charts';
import Chart3 from './Chart3/Chart3';

const baseUrl = "http://localhost:3000/budget"

function App() {
  const [dataSource, setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd78',
          '#ff3684',
          '#37a2eb',
          '#800381',
          '#FFCOCB',
          '#fd6b25',
          '#088080',
        ],
      }
    ],
    labels: []
  });

  const [dataSourceNew, setDataSourceNew] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}`)
      .then((res) => {
        setDataSourceNew(res.data.myBudget);
        setDataSource({
          datasets: [
            {
              data: res.data.myBudget.map((v) => v.budget),
              backgroundColor: [
                "#98abd6", 
                "#8a89p6", 
                "#7b6999", 
                "#6b496c", 
                "#a0501", 
                "#d0749f", 
                "#ff8c11"
              ],
            }
          ],
          labels: res.data.myBudget.map((v) => v.title)
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (  
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer"> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
      <center>
        <Charts chartData={dataSource} />
        <Chart3 dataSource={dataSourceNew} />
      </center>
    <Footer/>
    </Router>
  );
}

export default App;