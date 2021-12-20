// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, updateSearchInput} = props
  const {suggestion} = item

  const onArrow = () => {
    // console.log('Hello')
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="para">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
