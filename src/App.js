import logo from './logo.svg';
import { Sidebar } from './components/Sidebar';
import { Panel } from './components/Panel';
import './App.css';

function App() {
  return (
    <div className="main-container text-center">
      <div className='row main-container'>
      <aside className="col-lg-1 col-sm-1">
        <Sidebar />
      </aside>
      <article className="col-lg-11 col-sm-11 panel-section">
        <Panel/>
      </article>
      </div>
    </div>
  );
}

export default App;
