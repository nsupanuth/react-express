import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './main.css'

class App extends Component {

    state = {
        filename : 'xxxx',
        uploadStatus : ''
    }
    
    render () {

        return <div className = "box">
                <p> {this.state.filename} </p>
                <form ref="myForm">
                    <input ref = "myFile" name = "xxx" onChange = {() => this.handleFileChange()} type = "file"/>
                </form> 
                <button onClick = { () => this.handleFileUpload()} className = "button">Upload</button>
                {/* <button onClick = { () => this.getData()} className = "button">Get</button> */}
                <p>{this.state.uploadStatus}</p>
        </div>

    }

    handleFileChange(){
        this.setState({
            filename : this.refs.myFile.files[0].name
        })
        console.log(this.refs.uploadFile)
    }

    handleFileUpload(){
        const formData = new FormData(this.refs.myForm)
        const config = {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        }

        axios.post('http://localhost:8000/uploads',formData,config)
             .then(res => {
                 console.log(res)
             })

        this.setState({
            uploadStatus : 'Success'
        })
    }

    getData() {
       axios.get('http://localhost:8000/api/items')
            .then(res => {
                console.log(res.data)
            })

    }
}

ReactDOM.render(<App/>,document.getElementById('reactApp'))