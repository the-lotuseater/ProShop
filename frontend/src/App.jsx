import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './screens/HomeScreen';
import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header> 
          <main className="">
            <Container>
                <Route path='/' component={HomeScreen} exact></Route>
                <Route path='/product/:id' component={ProductScreen} exact></Route>
            </Container>
          </main>
          <Footer></Footer>
      </Router>
    </div>
  );
}