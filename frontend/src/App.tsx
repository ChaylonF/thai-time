import { useLocalStorage } from 'usehooks-ts'
import { useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Switches from './components/Switches'
import Clock from './components/Clock'

function App() {

const [script, setScript] = useLocalStorage('script', 'phonetic')
const [timezone, setTimezone] = useLocalStorage('timezone', 'local')
const [theme, setTheme] = useLocalStorage('theme', 'dark')

useEffect(() => {
    document.body.className = theme;
}, [theme]);

  return (
      <div className="flex flex-col h-screen overflow-hidden" >
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center space-y-14 px-4">
      <Clock script={script} timezone={timezone}/>
      <Switches script={script} setScript={setScript} timezone={timezone} setTimezone={setTimezone} theme={theme} setTheme={setTheme} />
      </main>
      <Footer />
      </div>
  )
}

export default App
