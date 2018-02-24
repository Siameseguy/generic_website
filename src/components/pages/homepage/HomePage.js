import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

import homepage from './homepage.css'

import Menu from '../../../components/menu/Menu'
import Jumbotron from '../../../components/jumbotron/Jumbotron'
import Footer from '../../../components/footer/Footer'

const HomePage = () => (
  <div>
    <Menu />
    <Jumbotron />
    <div className="section-1">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-xs-12">
              Lorem ipsum dolor amet iceland meditation jianbing, enamel pin
              synth before they sold out four dollar toast.
            </div>
            <div className="col-xs-12">
              Lorem ipsum dolor amet iceland meditation jianbing, enamel pin
              synth before they sold out four dollar toast.
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="col-xs-12">
              Lorem ipsum dolor amet iceland meditation jianbing, enamel pin
              synth before they sold out four dollar toast.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonials section-2">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h4>TESTIMONIAL 1</h4>
            "Lorem ipsum dolor amet iceland meditation jianbing, enamel pin
            synth before they sold out four dollar toast."
          </div>
          <div className="testimonial-two col-xs-12 col-sm-6">
            <h4>TESTIMONIAL 2</h4>
            "Lorem ipsum dolor amet iceland meditation jianbing, enamel pin
            synth before they sold out four dollar toast."
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default HomePage
