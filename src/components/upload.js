import React, { Component } from 'react';
import './App.css';

class Upload extends Component {

    state = {
        file: null
    }

    handleFile(e){

        let file = e.target.files[0]

        this.setState({file: file})

    }

    handleUpload(e){
        console.log(this.state, "THE STATE");
    }
   
    render() {
        return (
        <div className="Upload">
            
            <span className="Title">Upload Files</span>
            <form>
            <div className="Content">
                <label>Select File</label>
                <input type="file" name="file" onChange={(e) => this.handleFile(e)} />
            </div>
            <br/>
            <button type="button" onClick={(e) => this.handleUpload(e)}>Upload</button>
            </form>
        </div>
    );
  }
}

export default Upload;