import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { FeedBack } from "./components/FeedBack";
import { Thanks } from "./components/Thanks";

function App() {

  return (
    <main className="main">
      <article className='wrapper'>
        <Router>
          <Routes>
            <Route path="/" element={<FeedBack />}/>
            <Route path="/Thanks" element={<Thanks />}/>
          </Routes>
        </Router>
      </article>
    </main>
  );
}

export default App;
