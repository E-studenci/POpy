import './App.css';
import AddPointPage from './FinalPages/AddPointPage';
import ApprovalPage from './FinalPages/ApprovalPage';
import MainMenu from './FinalPages/Components/MainMenu';
import Navbar from './FinalPages/Components/Navbar';
import MainMenuPage from './FinalPages/MainMenuPage';
import StartPage from './FinalPages/StartPage';
import CreateRoutePage from './FinalPages/CreateRoutePage';
import AddPointToRoute from './FinalPages/Components/AddPointToRoute';
import LogInPanel from './FinalPages/Components/LogInPanel';
import PointsList from './FinalPages/Components/PointsList';
import RoutePage from './FinalPages/RoutePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteDetails from './FinalPages/Components/RouteDetails';
import SingInPanel from './FinalPages/Components/SingInPanel';
import AddPathPage from './FinalPages/Components/AddPathPage';
import PendingBadgesPage from './FinalPages/PendingBadgesPage';
import BadgeDetailsPage from './FinalPages/BadgeDetailsPage';
import TitleButton from './FinalPages/Components/TitleButton';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<TitleButton />}></Route>
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/add_point" element={<AddPointPage />}></Route>
          <Route path="/approve_participants" element={<ApprovalPage/>}/>
          <Route path="/create_trip" element={<CreateRoutePage />}></Route>
          <Route path="/routes" element={<PointsList />}></Route>
          <Route path="/route_details/*" element={<RoutePage />}/>
          <Route path="/pending_badges" element={<PendingBadgesPage />}/>
          <Route path="/badge/*" element={<BadgeDetailsPage />}/>
          <Route path="/log_in" element={<LogInPanel />}/>
          <Route path="/add_route" element={<AddPathPage />}/>
          <Route path="/sign_in" element={<SingInPanel />}/>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
