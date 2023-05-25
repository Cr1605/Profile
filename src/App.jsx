import Experties from "./component/experties/Experties";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import People from "./component/people/People";
import Portfolio from "./component/portfolio/Portfolio";
import Work from "./component/work/Work";
import css from './styles/app.module.scss'


const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
    </div>
  )
};

export default App;
