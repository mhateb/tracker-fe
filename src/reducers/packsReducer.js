// @flow

const initialState = {
    selectedPack: '',
    items: [
      {
          id: 0,
          title: 'Thing',
          words: [
            {
                id: 0,
                original: 'Milk',
                translate: 'Молоко'
            },
            {
                id: 1,
                original: 'Meat',
                translate: 'Мясо'
            },
            {
                id: 2,
                original: 'Air',
                translate: 'Воздух',
            },
            {
                id: 3,
                original: 'Action',
                translate: 'Действие'
            },
            {
                id: 4,
                original: 'Warning',
                translate: 'Предупреждение'
            },
            {
                id: 5,
                original: 'Error',
                translate: 'Ошибка'
            },
            {
                id: 6,
                original: 'Ghost',
                translate: 'Призрак'
            },
            {
                id: 7,
                original: 'Loader',
                translate: 'Загрузчик'
            },
            {
                id: 8,
                original: 'Dictionary',
                translate: 'Словарь'
            },
            {
                id: 9,
                original: 'Rating',
                translate: 'Рейтинг'
            }
          ]
      },
      {
          id: 1,
          title: 'lolkek',
          items: [
            {
                id: 6,
                original: 'Ghost',
                translate: 'Призрак'
            },
            {
                id: 7,
                original: 'Loader',
                translate: 'Загрузчик'
            },
            {
                id: 8,
                original: 'Dictionary',
                translate: 'Словарь'
            },
            {
                id: 9,
                original: 'Rating',
                translate: 'Рейтинг'
            },
            {
                id: 0,
                original: 'Milk',
                translate: 'Молоко'
            },
            {
                id: 1,
                original: 'Meat',
                translate: 'Мясо'
            },
            {
                id: 2,
                original: 'Air',
                translate: 'Воздух',
            },
            {
                id: 3,
                original: 'Action',
                translate: 'Действие'
            },
            {
                id: 4,
                original: 'Warning',
                translate: 'Предупреждение'
            },
            {
                id: 5,
                original: 'Error',
                translate: 'Ошибка'
            }
          ]
      }
  ]
}

export function packsReducer(state = initialState, action) {
    switch (action.type) {
        default:
          return state
      }
}
