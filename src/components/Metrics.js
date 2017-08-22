import React from 'react'
import { List, Segment, Table } from 'semantic-ui-react'
import ThesaurusText from './ThesarusText'

const Metrics = (props) => {

    return(
<Table inverted celled className='table'>
    <Table.Body>
        <Table.Row>
        {props.text.slice(0,4).map((word, i)=>
          <Table.Cell onClick={props.handleClick.bind(null, word)}><a href='#uigrid'>{word}</a></Table.Cell>
          )}
        </Table.Row>
        <Table.Row>
        {props.text.slice(4,8).map((word, i)=>
          <Table.Cell onClick={props.handleClick.bind(null, word)}><a href='#uigrid'>{word}</a></Table.Cell>
          )}
        </Table.Row>
        <Table.Row>
        {props.text.slice(8,12).map((word, i)=>
          <Table.Cell onClick={props.handleClick.bind(null, word)}><a href='#uigrid'>{word}</a></Table.Cell>
          )}
        </Table.Row>
        <Table.Row>
        {props.text.slice(12,16).map((word, i)=>
          <Table.Cell onClick={props.handleClick.bind(null, word)}><a href='#uigrid'>{word}</a></Table.Cell>
          )}
        </Table.Row>
        <Table.Row>
        {props.text.slice(16,).map((word, i)=>
          <Table.Cell onClick={props.handleClick.bind(null, word)}><a href='#uigrid'>{word}</a></Table.Cell>
          )}
        </Table.Row>
    </Table.Body>
</Table>
    )

}

export default Metrics


