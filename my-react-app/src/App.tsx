import './App.css'
import Page from './components/Page'
// import HealthcarePage from './healthcare'

function App() {

  return (
    <>
     <div className="bg-gray-50 text-gray-800 font-inter">
      {/* <HealthcarePage /> */}
      <h1>Welcome</h1>
      <Page file="/content/pages/home.md" />
     </div>
    </>
  )
}

export default App
