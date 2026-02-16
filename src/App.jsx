import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Crea un nuovo Post</h1>

      <form className="card p-4 shadow-sm">

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="publicCheck" />
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
