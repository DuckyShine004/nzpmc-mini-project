import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
