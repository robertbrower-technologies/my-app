import { Filter } from './filter/filter';

export const MockFilters: Array<Filter> = [
    {
        name: 'Womens shoes or cheap',
        expressions: [
          {
            id: 1,
            expressions: [
              {
                id: 1,
                field: 'productType',
                operator: 'eq',
                value: 'Shoes'
              },
              {
                id: 2,
                field: 'gender',
                operator: 'eq',
                value: 'Womens'
              }
            ]
          },
          {
            id: 2,
            expressions: [
              {
                id: 1,
                field: 'price',
                operator: 'lt',
                value: '50'
              }
            ]
          }
        ]
    },
    {
        name: 'Mens expensive',
        expressions: [
          {
            id: 1,
            expressions: [
              {
                id: 1,
                field: 'gender',
                operator: 'eq',
                value: 'Mens'
              },
              {
                id: 2,
                field: 'price',
                operator: 'gt',
                value: '50'
              }
            ]
          }
        ]
    }
];