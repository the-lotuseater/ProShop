import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <main className="py-5">
          <Container>
              <Route path='/' component={HomeScreen} exact></Route>
              <Route path='/product/:id' component={ProductScreen} exact></Route>
          </Container>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  )
}
