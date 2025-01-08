import './App.css'
import SelectableGrid from './components/SelectableGrid'

function App() {

  return (
    <>
      <div>
        <h1>Drag and Select Grid</h1>
        <p>Grid with drag and select</p>
        <SelectableGrid rows={15} columns={10}/>
      </div>
    </>
  )
}

export default App
