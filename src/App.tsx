import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FullScreen from './pages/FullScreen';
import Home from './pages/Home';
import Input from './pages/Input';
import Interval from './pages/Interval';
import Notification from './pages/Notification';
import OutsideClick from './pages/OutsideClick';
import Scroll from './pages/Scroll';
import Tabs from './pages/Tabs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/outside_click" element={<OutsideClick />} />
        <Route path="/interval" element={<Interval />} />
        <Route path="/input" element={<Input />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/fullscreen" element={<FullScreen />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
