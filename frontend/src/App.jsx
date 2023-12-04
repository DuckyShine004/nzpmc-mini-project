import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import RegistrationForm from './components/registration-page/RegistrationForm'
import ViewingPage from './components/viewing-page/ViewingPage'

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
