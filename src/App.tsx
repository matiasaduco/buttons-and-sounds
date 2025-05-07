import ButtonBox from './components/ButtonBox/ButtonBox'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div className='flex flex-col items-center h-screen gap-4'>
      <MusicPlayer />
      <ButtonBox />
    </div>
  )
}

export default App
