


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Layout from '../components/layout/Layout';

// Home component

// ContactUs component
function ContactUs() {
  return <h1>Contact Us Page</h1>;
}

// NotFound component for unmatched routes
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function IndexRoutes() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default IndexRoutes;
