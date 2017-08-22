import React, { Component } from 'react'
import MetricContainer from "./MetricContainer"
import { Form, TextArea, Image } from 'semantic-ui-react'

import '../stylesheets/style.css'

export default class TextContainer extends Component {
  constructor() {
     super()

     this.state = {
         text: '',
         thesaurusResults: []
     }
  }

  handleTextChange = (e) => {
      this.setState({
          text: e.target.value
      })
  }

  render() {
    return (
      <div>
      <Image className='imageForm' src='https://2.bp.blogspot.com/-jCDhewPG7tI/UKAK4EBTaeI/AAAAAAAAA20/wmIE_f47rz0/s1600/extirpation.jpg'/>
        <Form class='form'>
          <TextArea className='textarea' autoHeight placeholder='Enter Text' value={this.state.text} onChange={this.handleTextChange}/>
        </Form>
            <MetricContainer text={this.state.text} />
      </div>
    )
  }

 }

