export class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getNotes() {
    return fetch(this.baseUrl, {credentials: 'include'}).then((res) => res.json());
  }
  addNote(heading, content) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        heading,
        content,
      }),
      credentials: 'include',
    }).then((res) => res.text());
  }
  editNote(heading, content, id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        heading,
        content,
      }),
      credentials: 'include',
    }).then((res) => res.text());
  }

  removeNote(id){
    return fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
        credentials: 'include',
      }).then((res) => res.text())
  }
}
