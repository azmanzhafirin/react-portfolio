import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../src/assets/css/templatemo-style.css';
import Header from './components/layout/Header/Header';
import AboutMe from './components/aboutme/AboutMe'
import MyServices from './components/myservices/MyServices';
import MyWork from './components/mywork/MyWork';




function App() {
  return (

    <div id="page-wraper">
      <Header />
      <AboutMe />
      <MyServices />
      <MyWork />
    </div>
  );
}

export default App;
