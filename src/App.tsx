import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CopyToClipboard from './pages/CopyToClipboard';
import Debounce from './pages/Debounce';
import EffectOnce from './pages/EffectOnce';
import FirstRender from './pages/FirstRender';
import FullScreen from './pages/FullScreen';
import Home from './pages/Home';
import Input from './pages/Input';
import Interval from './pages/Interval';
import IsMounted from './pages/IsMounted';
import MediaQuery from './pages/MediaQuery';
import Notification from './pages/Notification';
import OutsideClick from './pages/OutsideClick';
import Scroll from './pages/Scroll';
import Tabs from './pages/Tabs';
import Throttle from './pages/Throttle';
import UpdateEffect from './pages/UpdateEffect';

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
          <Route path="/throttle" element={<Throttle />} />
          <Route path="/mediaquery" element={<MediaQuery />} />
          <Route path="/effect_once" element={<EffectOnce />} />
          <Route path="/update_effect" element={<UpdateEffect />} />
          <Route path="/first_render" element={<FirstRender />} />
          <Route path="/is_mounted" element={<IsMounted />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Toaster />
    </>
  );
}

export default App;
