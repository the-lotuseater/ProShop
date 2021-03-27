import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import {Container} from 'react-bootstrap'

export default function App() {
  return (
    <div>
      <Header></Header>
      <main className="py-5">
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  )
}
