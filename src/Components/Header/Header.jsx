import React from 'react'
import "./Header.css";

export default function Header() {
  return (
    <header className='shadow-sm p-3 mb-5 bg-body rounded'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-2">
                <strong className='ms-5'>Where in the world?</strong>
                <div className="d-flex justify-content-end align-items-center">
                    <ion-icon name="moon-outline"></ion-icon>
                    <span className='ms-1 dark-mode-lbl me-5'>Dark-mode</span>
                </div>
            </div>
        </nav>
    </header>
  )
}
