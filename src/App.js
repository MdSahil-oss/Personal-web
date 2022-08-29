import Home from './components/home/Home';
import Layout from './Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import NoPage from './components/no-page/NoPage';
import Work from './components/work-page/Work';
import Projects from './components/project-page/Projects';
import Academy from './components/academy-page/Academy';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
