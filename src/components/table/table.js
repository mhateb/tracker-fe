import React, { PureComponent } from 'react';

import styles from './table.scss';

class Table extends PureComponent {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Слово</td>
            <td>Перевод</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>Молоко</td>
          </tr>
          <tr>
            <td>Ghost</td>
            <td>Призрак</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>Толстый</td>
          </tr>
          <tr>
            <td>Long</td>
            <td>Длинный</td>
          </tr>
          <tr>
            <td>King</td>
            <td>Король</td>
          </tr>
          <tr>
            <td>Dragon</td>
            <td>Дракон</td>
          </tr>
          <tr>
            <td>Home</td>
            <td>Дом</td>
          </tr>
          <tr>
            <td>Dictionary</td>
            <td>Словарь</td>
          </tr>
          <tr>
            <td>Join</td>
            <td>Соединять</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
