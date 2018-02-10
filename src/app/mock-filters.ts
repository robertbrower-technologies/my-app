import { Filter } from './filter/filter';

export const MockFilters: Array<Filter> = [
    {
        name: 'Womens shoes or cheap',
        expressionGroups: [
          {
            expressions: [
              {
                field: 'productType',
                operator: 'eq',
                value: 'shoes'
              },
              {
                field: 'gender',
                operator: 'eq',
                value: 'female'
              }
            ]
          },
          {
            expressions: [
              {
                field: 'price',
                operator: 'lt',
                value: 50
              }
            ]
          }
        ],
        unsavedChanges: false
    },
    {
        name: 'Mens expensive',
        expressionGroups: [
          {
            expressions: [
              {
                field: 'gender',
                operator: 'eq',
                value: 'male'
              },
              {
                field: 'price',
                operator: 'gt',
                value: 50
              }
            ]
          }
        ],
        unsavedChanges: false
    }
];