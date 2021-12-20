// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialSuggestionsList} = this.props
    const suggestionsList = initialSuggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="google-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-image"
            />
          </div>
          <div className="shadow-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
                alt="search icon"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                className="input"
                placeholder="Search Google"
              />
            </div>

            <ul className="list-container">
              {suggestionsList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  item={eachItem}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
