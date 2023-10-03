import { Route, Routes } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { Issue } from './pages/Issue';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/issue/:id' Component={Issue} />
    </Routes>
  );
}
