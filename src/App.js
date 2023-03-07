import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataList from './Component/DataList';
import DataCreate from './Component/DataCreate';
import DataEdit from './Component/DataEdit';


function App() {
  return (
    <div className="App">
      {/* <h1>testing</h1> */}
      {/* <DataList/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataList/>}></Route>
        <Route path="/data/create" element={<DataCreate/>}></Route>
        <Route path="/data/edit/:id" element={<DataEdit/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
