


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Layout from '../components/layout/Layout';
import Service from './sevice-page';

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
          <Route path="service" element={<Service />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default IndexRoutes;
