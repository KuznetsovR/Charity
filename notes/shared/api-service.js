export class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getNotes() {
    return fetch("http://localhost:3000/notes").then((res) => res.json());
  }
  addNote(heading, content) {
    return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        heading,
        content,
      }),
    }).then((res) => res.text()); //перенести в апи
  }
  editNote(heading, content, id) {
    return fetch(`http://localhost:3000/notes/${id}`, {
      method: "PUT",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        heading,
        content,
      }),
    }).then((res) => res.text());
  }

  removeNote(id){
    return fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
        headers: {
          ["Content-type"]: "application/json",
        },
      }).then((res) => res.text())
  }
}
