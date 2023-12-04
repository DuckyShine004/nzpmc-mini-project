import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import RegistrationForm from './components/RegistrationForm'
import ViewingPage from './components/ViewingPage'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/view" element={<ViewingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
