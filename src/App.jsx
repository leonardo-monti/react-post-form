import { useState } from 'react'
import './App.css'
import axios from 'axios'

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false
}

export default function App() {

  const [formData, setFormData] = useState(initialFormData)

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("Dati: ", formData)

    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log("richiesta inviata", res.data)
      })
      .catch((error) => {
        console.error("Errore: ", error)
      })
  }



  return (
    <div className="container py-4">
      <h1 className="mb-4">Crea un nuovo Post</h1>

      <form
        onSubmit={handleFormSubmit}
        className="card p-4 shadow-sm">

        <div className="mb-3">
          <label className="form-label"
            htmlFor="authorInput">Author</label>
          <input
            id="authorInput"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleFormChange}
            className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label"
            htmlFor="titleInput">Title</label>
          <input
            id="titleInput"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
            className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label"
            htmlFor="bodyInput">Body</label>
          <textarea
            id="bodyInput"
            name="body"
            value={formData.body}
            onChange={handleFormChange}
            className="form-control"
            rows="4"></textarea>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="publicCheck"
            name="public"
            checked={formData.public}
            onChange={handleFormChange} />
          <label className="form-check-label" htmlFor="publicCheck">
            Public
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Invia Post
        </button>

      </form>
    </div>
  )
}
