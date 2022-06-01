import Header from './components/header';
import AppRouters from './routers/router_index';
import './sass/index.scss';
function App() {
  return (
    <div className="wrapper">
    <Header />
    <AppRouters />
    </div>
  );
}

export default App;
