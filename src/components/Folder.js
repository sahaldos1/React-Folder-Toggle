import React, { Component } from "react";
import "./Folder.css";


//created and defined folder class
class Folder extends Component {
  constructor() {
    super();


    //has a changeable propertry called hideFolders that determines whether to present or hide folders
    this.state = {
      hideFolders: false,
    };

  }


  //clickToggle is the function called when the toggle button is clicked. when it is clicked it changes the hideFolders value to the opposite of what it was
  clickToggle = () => {
    this.state.hideFolders === true ? this.setState({ hideFolders: false }) : this.setState({ hideFolders: true });
  };

  render() {

    //create the components to be loaded. If hideFolders is true, then an empty list is rendered. If hideFolders is false, a list with the folders is rendered
    let folders = this.state.hideFolders === true ? (<div>
      <ul>
      </ul>
    </div>) : (
      <div>
        <ul>
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
        </ul>
      </div>
    );
    return (
      <div className="folder-div">
        <h2>Home</h2>
        {folders}
        <button onClick={this.clickToggle}>Toggle</button>
      </div>
    );
  }
}

export default Folder;
