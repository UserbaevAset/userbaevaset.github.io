import './App.css'
import SketchfabFrame from "./components/SketchfabFrame/SketchfabFrame.jsx";

function App() {
    const uid = '25a7819f512944d8b0d594a5b0c034c8';

    return (
        <div className="sketchfab-embed-wrapper">
            <SketchfabFrame uid={uid}/>
        </div>
    )
}

export default App
