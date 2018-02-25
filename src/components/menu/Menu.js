import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import menu from './menu.css'

export default class MenuExampleStackable extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Image src={require('../../images/pacnode-logo.png')} width="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  ABOUT <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/charity">
                  CHARITY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pacnode-explorer">
                  PACNODE EXPLORER
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item mr-sm-2">
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item mr-sm-2">
                <Link className="nav-link" to="/signup">
                  SIGNUP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
