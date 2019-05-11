import React, { PureComponent } from 'react';

import DeleteIcon from 'resources/icons/delete.svg';

import styles from './table.scss';

class Table extends PureComponent {

  getWords = (words) => (
    words.map(word => (
      <tr key={word.id}>
        <td>{word.original}</td>
        <td>{word.translate}</td>
        <td className={styles["button-delete-word"]}>
          <button onClick={() => this.handleRemove(word.id)}>
            <img src={DeleteIcon} />
          </button>
        </td>
      </tr>
    ))
  )

  handleRemove = (id) => {
    const { removeWordRequest } = this.props

    removeWordRequest(id)
  }

  render() {
    const { words } = this.props

    return (
      <table className={styles["table-words"]}>
        <thead>
          <tr>
            <td>Слово</td>
            <td>Перевод</td>
            <td></td>
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
