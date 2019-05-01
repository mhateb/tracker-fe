import React, { PureComponent } from 'react';

import styles from './table.scss';

class Table extends PureComponent {

  getWords = (words) => (
    words.map(word => (
      <tr key={word.id}>
        <td>{word.original}</td>
        <td>{word.translate}</td>
      </tr>
    ))
  )

  render() {
    const { words } = this.props

    return (
      <table>
        <thead>
          <tr>
            <td>Слово</td>
            <td>Перевод</td>
          </tr>
        </thead>
        <tbody>
          {
            this.getWords(words)
          }
        </tbody>
      </table>
    )
  }
}

export default Table
