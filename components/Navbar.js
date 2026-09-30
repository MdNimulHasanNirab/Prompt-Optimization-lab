"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-inner">

        <a href="#" className="brand">
          <span className="brand-mark">NH</span>

          <span>
            PROMPT
            <small>LAB</small>
          </span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>

          <a href="#case" onClick={() => setOpen(false)}>
            CASE
          </a>

          <a href="#pipeline" onClick={() => setOpen(false)}>
            PIPELINE
          </a>

          <a href="#workbench" onClick={() => setOpen(false)}>
            WORKBENCH
          </a>

          <a href="#evaluation" onClick={() => setOpen(false)}>
            EVALUATION
          </a>

          <a href="#playground" onClick={() => setOpen(false)}>
            PLAYGROUND
          </a>

        </nav>

        <div className="nav-status">
          <span></span>
          OPEN TO OPPORTUNITIES
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

    </header>
  );
}