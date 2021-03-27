import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'

export default function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Container>
          <h1>
            Hello
          </h1>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  )
}
