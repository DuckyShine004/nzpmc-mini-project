import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Heading from "./components/Heading"
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (
    <Router>
      <div>
        <Heading heading="Registration Page" />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
