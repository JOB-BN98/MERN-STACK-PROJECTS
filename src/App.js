import './App.css';
import Rigel from './Babel/Rigel'
import Pollux from './Babel/Pollux'
import Satella from './Babel/Satella'
import Vega from './Babel/Vega'
import { Link, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Cygnus from './Babel/Cygnus'
import Cetus from './Babel/Cetus'
import Deneb from './Babel/Deneb';
import { ToastContainer } from 'react-toastify';
import Header from './Babel/Header';
import Rigeld from './Babel/Rigeld';
import Rigele from './Babel/Rigele';

function App() {
  return (
    <>
          <ToastContainer theme='colored' position='top-center'></ToastContainer>
        <Router >
        <center>
          <div>
            {/* <Link to="/satella">Home(Satella)</Link><br></br>
            <Link to="/pollux">Profile Creation(pollux)</Link><br></br>
            <Link to="/deneb">Login(Deneb)</Link><br></br>
            <Link to="/book/detail/:bid">details(Rigeld)</Link><br></br>
            <Link to="/book/edit/:bid">details(Rigele)</Link><br></br>
            <Link to="/rigel">display(Rigel)</Link><br></br>
            <Link to="/vega">upload(vega)</Link><br></br>
            <Link to="/cygnus">Cygnusnav(Global)</Link><br></br>
            <Link to="/cetus">Cetusdrop(Global)</Link><br></br>
            <Link to="/header">Header(Private)</Link><br></br> */}

          </div>
          <Cygnus/>
          <Header/>
        </center>
      <Routes>
        <Route exact path="/satella" element={<Satella/>}></Route>
        <Route exact path="/pollux" element={<Pollux/>}></Route>
        <Route exact path="/deneb" element={<Deneb/>}></Route>
        <Route exact path="/book/detail/:bid" element={<Rigeld/>}></Route>
        <Route exact path="/book/edit/:bid" element={<Rigele/>}></Route>
        <Route exact path="/rigel" element={<Rigel/>}></Route>
        <Route exact path="/vega" element={<Vega/>}></Route>
        <Route exact path="/cygnus" element={<Cygnus/>}></Route>
        <Route exact path="/cetus" element={<Cetus/>}></Route>
        <Route exact path="/header" element={<Header/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
