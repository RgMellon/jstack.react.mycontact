import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async loadContacts(orderby = 'asc') {
    return await this.httpClient.get(`contacts?orderBy=${orderby}`);
  }

  create(contact) {
    return this.httpClient.post('contacts', {
      body: contact,
    });
  }

  getContactById(id) {
    console.log('cheguei aqui', id);
    return this.httpClient.get(`contacts/${id}`);
  }
}
const contactService = new ContactsService();
export default contactService;
