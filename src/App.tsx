import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CopyToClipboard from './pages/CopyToClipboard';
import Debounce from './pages/Debounce';
import FullScreen from './pages/FullScreen';
import Home from './pages/Home';
import Input from './pages/Input';
import Interval from './pages/Interval';
import MediaQuery from './pages/MediaQuery';
import Notification from './pages/Notification';
import OutsideClick from './pages/OutsideClick';
import Scroll from './pages/Scroll';
import Tabs from './pages/Tabs';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/scroll" element={<Scroll />} />
          <Route path="/outside_click" element={<OutsideClick />} />
          <Route path="/copy_to_clipboard" element={<CopyToClipboard />} />
          <Route path="/interval" element={<Interval />} />
          <Route path="/input" element={<Input />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/fullscreen" element={<FullScreen />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/debounce" element={<Debounce />} />
          <Route path="/mediaquery" element={<MediaQuery />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Toaster />
    </>
  );
}

export default App;
