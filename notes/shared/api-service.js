export class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getNotes() {
        return fetch("http://localhost:3000/notes")
            .then((res) => res.json())
    }
}