import { HashRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes/Routes'

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Routes />
                <Footer />
            </div>
        </Router>
    )
}

export default App
