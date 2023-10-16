import './App.css'; // Importing the CSS file for styling

import { useState } from 'react'; // Importing useState hook from React

import { faPlane, faCar, faBicycle, faShip, faAngleDown } from "@fortawesome/free-solid-svg-icons"; // Importing specific icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component from Font Awesome

function App() {
  // Array of transport options with their respective values, names, and icons
  const transportList = [
    { value: 'airplane', name: 'airplane', icon: <FontAwesomeIcon icon={faPlane} /> },
    { value: 'car', name: 'car', icon: <FontAwesomeIcon icon={faCar} /> },
    { value: 'bike', name: 'bicycle', icon: <FontAwesomeIcon icon={faBicycle} /> },
    { value: 'ship', name: 'ship', icon: <FontAwesomeIcon icon={faShip} /> },
  ]

  const [optionSelected, setOptionSelected] = useState(transportList[0]) // State for the selected transport option
  const [showHiddenOption, setShowHiddenOption] = useState(false) // State to toggle display of hidden options

  // Function to toggle the display of hidden options
  const handleOptionSelected = () => {
    setShowHiddenOption(!showHiddenOption)
  }

  // Function to handle click on an option and update the selected option
  const handleOptionClick = (index) => {
    setOptionSelected(transportList[index]);
  }

  return (
    <div className='App'>
      <div className='containerSelect'> {/* Container for the select element */}
        <div className='containerOptionSelected' onClick={() => handleOptionSelected()}> {/* Displayed selected option */}
          <div className='optionSelected'>
            <div>
              {optionSelected.icon} {/* Displaying the icon of the selected option */}
            </div>
            <span>{optionSelected.name}</span> {/* Displaying the name of the selected option */}
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleDown} /> {/* Icon for the dropdown arrow */}
          </div>
        </div>
        {
          showHiddenOption && ( /* Display hidden options if 'showHiddenOption' is true */
            <ul>
              {
                transportList.map((item, index) => {
                  return (
                    <li onClick={() => handleOptionClick(index)}>
                      <span>{item.icon}</span> {/* Displaying the icon of each option */}
                      {item.name} {/* Displaying the name of each option */}
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App; // Exporting the App component as the default export