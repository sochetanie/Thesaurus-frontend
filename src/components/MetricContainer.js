import React, { Component } from 'react'
import Metrics from './Metrics'
import ThesaurusText from './ThesarusText'
import { VictoryScatter } from 'victory'

const URL = 'http://words.bighugelabs.com/api/2/0760696323a58d90b3b66a9fef38cad8/'

export default class MetricContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clickedWord: '',
      thesuarusResult: null,
    }
  }

  sortTextbyNumber = () => {
    let sWords = this.props.text.toLowerCase().trim().replace(/[,;:!?'"()$#@.]/g,'').split(/[\s]+/g).sort()

    const ignore = ['and','the','to','are','a','of','for','as','i','with','or','at','it','is','on','that','this','can','by','an','in','be','had','from','was','were','has','have','he','she','him','her','which','who','his','they','them','not','do','their','if', 'after', 'only', 'all', 'made', 'make', 'what', 'when', 'where', 'been']

    let counts = {}
    for(let i=0; i<sWords.length; i++){
      if(!ignore.includes(sWords[i]) && sWords[i] !== ''){
        counts[sWords[i]] = counts[sWords[i]] || 0
        counts[sWords[i]]++
      }
    }

    let arr = []
    for (var key in counts) {
      if(counts.hasOwnProperty(key)) {
        arr.push( [ `${key}: `, counts[key] ] )
      }
    }

    arr.sort((a,b) => {
      return b[1] - a[1]
    })
    return arr.slice(0,20)
 }
 

  getApiData = (e, n) => {
     let word = e[0].slice(0,-2)
     fetch(URL + word + '/json')
         .then(res => res.json())
         .then(thesuarusResult => {
          this.setState({thesuarusResult})
         })
         .catch(error=>alert('No Result Have Been Found'))

  }
 
  render() {
      return (
          <div>
              <Metrics text={this.sortTextbyNumber()} handleClick={this.getApiData}/>
              <ThesaurusText text={this.state.thesuarusResult}/>
          </div>
          )
  }

}
