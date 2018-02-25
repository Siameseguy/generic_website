import React from 'react'
import { Link } from 'react-router-dom'

import footer from '../../components/footer/footer.css'

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <h5>ABOUT</h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-3">
          <h5>SERVICES</h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h5>Footer summary goes here</h5>
          <p>
            Lorem ipsum dolor amet godard kogi humblebrag tofu chartreuse next
            level air plant meh 8-bit.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
