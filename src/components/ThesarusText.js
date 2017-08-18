import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { VictoryScatter } from 'victory'

class ThesaurusText extends Component{
  state = {
    text: null,
    text: this.props.text,
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      text: nextProps.text
    })
  }

  checkStateNoun = () => {
    if (this.state.text === null) {
      return ""
    } else {
      return this.mappedTextNoun()
    }
  }

  mappedTextNoun = () => {
    if (this.state.text.noun === undefined) {
      return <li>No Nouns have been found</li>
    } else {
      return this.state.text.noun.syn.map((n, i) => {
        return (
            <li key={i}>{n}</li>
          )
      })
    }
  }

  checkStateVerb = () => {
    if (this.state.text === null) {
      return ""
    } else {
      return this.mappedTextVerb()
    }
  }

  mappedTextVerb = () => {
    if (this.state.text.verb === undefined) {
      return <li>No Verbs have been found</li>
    } else {
      return this.state.text.verb.syn.map((v, i) => {
        return (
            <li key={i}>{v}</li>
          )
      })
    } 
  }

  randNumber = () => {
    return Math.floor((Math.random() * 20) + 5)
  }

  randNumberSecond = () => {
    return Math.floor((Math.random() * 10) + 13)
  }

    graphDataVerb  = () => {
    if (this.state.text !== null ) {
      return this.state.text.verb.syn.slice(0,7).map(word => {
        return {x: this.randNumber(), y: this.randNumberSecond(), symbol: "star", fill: "blue", opacity: 1, label:word}
      })
    }
  }

  graphDataNoun = () => {
    if (this.state.text !== null ) {
      return this.state.text.noun.syn.slice(0,7).map(word => {
        return {x: this.randNumberSecond(), y: this.randNumber(), symbol: "diamond", opacity: 0.8, fill: "green", label:word}
      })
    }
  }

  combinedGraph = ()=> {
    //debugger
    let newTest = this.graphDataVerb()
    let anotherTest = this.graphDataNoun()
    // debugger
    if (newTest !== undefined || anotherTest !== undefined){
    return newTest.concat(anotherTest)
    }
  }

  render(){
    return(
      <div class='cards'>
        <VictoryScatter 
            size={4}
            data={this.combinedGraph()}
        />
        <Card.Header>
          <Grid >
            <Grid.Column className='six' width={6}>
              <Image className='imageSix' id='uigrid' src='https://oup.useremarkable.com/production/images/uploads/2529/original/nouns.jpg?1471959531' />
                <ul>
                  {this.checkStateNoun()}
                </ul>
            </Grid.Column>
            <Grid.Column className='six' width={6}>
              <Image className='imageSix' src='http://www.vanceusa.com/wp-content/uploads/2017/05/verb.jpg' />
                <ul>
                  {this.checkStateVerb()}
                </ul>
            </Grid.Column>
          </Grid>
        </Card.Header>
      </div>
      )
  }


}

export default ThesaurusText