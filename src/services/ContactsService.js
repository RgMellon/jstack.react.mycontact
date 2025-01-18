import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async loadContacts(orderBy = 'asc') {
    return await this.httpClient.get(`contacts?orderBy=${orderBy}`);
  }

  create(contact) {
    return this.httpClient.post('contacts', {
      body: contact,
    });
  }
}

export default new ContactsService();
