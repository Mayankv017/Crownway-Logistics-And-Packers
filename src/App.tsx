import Navbar from './Components/Navbar'
import HeroSec from './Components/herosec'
import MainBody from './Components/mainbody'
import FooterSec from './Components/footersec'

function App() {
  return (
    <div className="min-h-screen bg-[#081126] text-white">
      <Navbar />
      <HeroSec />
      <MainBody />
      <FooterSec />
    </div>
  )
}

export default App