import './App.css'
import SelectableGrid2 from './components/SelectableGrid2'

function App() {

  return (
    <>
      <div>
        <h1>Drag and Select Grid</h1>
        <p>Grid with drag and select</p>
        <SelectableGrid2 rows={15} columns={10}/>
      </div>
    </>
  )
}

export default App
