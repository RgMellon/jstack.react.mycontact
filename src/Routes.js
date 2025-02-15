import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Contacts } from './app/contacts/page';
import { EditContact } from './app/edit-contacts/page';
import { NewContact } from './app/new-contacts/page';

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
