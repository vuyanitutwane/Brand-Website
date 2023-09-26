// Importing necessary CSS styles and components.
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { CaseStudies } from './Components/CaseStudies';
import { Home } from './Components/Home';
import { Industries } from './Components/Industries';
import { Services } from './Components/Services';
import { ContactUs } from './Components/ContactUs';

// The main entry point of your React application.
function App() {
  return (
    <div className="App">
      {/* Rendering the Home section */}
      <Home />

      {/* Rendering the Services section */}
      <Services />

      {/* Rendering the Case Studies section */}
      <CaseStudies />

      {/* Rendering the Industries section */}
      <Industries />

      {/* Rendering the Contact Us section */}
      <ContactUs />
    </div>
  );
};

export default App;