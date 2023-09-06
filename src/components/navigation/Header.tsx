import React from "react";
import { Link } from "react-router-dom";
import { PiBoneThin } from "react-icons/pi";

export default function Header() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div>
          <Link to="">
            <PiBoneThin />
          </Link>
        </div>
      </nav>
    </header>
  );
}
