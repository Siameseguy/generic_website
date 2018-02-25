import React, { Component } from 'react'

import jumbotron from './jumbotron.css'

const Jumbotron = () => (
  <div>
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4 text-center">PACNODE</h1>
        <p className="lead text-center">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p className="text-center">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
    </div>
  </div>
)

export default Jumbotron
