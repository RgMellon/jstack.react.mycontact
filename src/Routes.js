import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home';
import { EditContact } from './pages/EditContact';
import { NewContact } from './pages/NewContact';
import { Contacts } from './app/contacts/page';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/new" element={<NewContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
}
