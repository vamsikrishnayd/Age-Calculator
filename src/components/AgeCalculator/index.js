import {Component} from 'react'

import './index.css'

class AgeCalculator extends Component {
  state = {
    givenInput: '',
    errorMsg: '',
    resultMsg: '',
  }

  getInputValue = event => {
    this.setState({
      givenInput: event.target.value,
    })
  }

  calculateAge = () => {
    const {givenInput} = this.state
    const givenYear = parseInt(givenInput, 10)
    const presentYear = new Date().getFullYear()

    if (givenInput.length === 4 && givenYear < presentYear) {
      const getAge = presentYear - givenYear
      let result = ''
      if (getAge === 1) {
        result = `You are ${getAge} year old by the end of 2021`
      } else {
        result = `You are ${getAge} years old by the end of 2021`
      }

      this.setState({
        resultMsg: result,
        errorMsg: '',
      })
    } else {
      this.setState({
        resultMsg: '',
        errorMsg: 'Enter the year that you are Born',
      })
    }
  }

  render() {
    const {resultMsg, errorMsg} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Age Calculator</h1>
          <div className="input-ele">
            <input
              type="text"
              placeholder="Enter the year that you are born"
              className="input-element"
              id="inputText"
              onChange={this.getInputValue}
            />
            <br />
            <p className="err-msg" htmlFor="inputText">
              {errorMsg}
            </p>
          </div>
          <p className="result-msg">{resultMsg}</p>
          <button type="button" className="button" onClick={this.calculateAge}>
            Calculate
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          className="persons-img"
          alt="persons"
        />
      </div>
    )
  }
}

export default AgeCalculator
