import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <AnimatePresence mode="wait">
      <div>
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            <NavBar />

            <main>
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/createitem" element={<CreateContainer />} />
              </Routes>
            </main>
          </div>
        )}
      </div>
    </AnimatePresence>
  )
}

export default App
