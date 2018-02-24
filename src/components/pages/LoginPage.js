import React from 'react'
import LoginForm from '../../forms/LoginForm'
import Menu from '../../components/menu/Menu'
import Footer from '../../components/footer/Footer'

class LoginPage extends React.Component {
  submit = data => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="ui container">
          <LoginForm submit={this.submit} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default LoginPage
