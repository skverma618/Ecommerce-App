export const color = [
    "White",
    "Black",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Maroon",
    "Pink",
]

export const filters = [
    {
        id: 'color',
        name: 'color',
        options: [
            {value: 'white', label: 'White'},
            {value: 'black', label: 'Black'},
            {value: 'red', label: 'Red'},
            {value: 'blue', label: 'Blue'},
            {value: 'green', label: 'Green'},
            {value: 'yellow', label: 'Yellow'},
            {value: 'maroon', label: 'Maroon'},
            {value: 'pink', label: 'Pink'},
        ]
    },
    {
        id: 'size',
        name: 'size',
        options: [
            {value: 's', label: 'S'},
            {value: 'm', label: 'M'},
            {value: 'l', label: 'L'},
            {value: 'xl', label: 'XL'},
            {value: 'xxl', label: 'XXL'},
        ]
    },
];
export const singleFilters = [
    {
        id: 'price',
        name: 'price',
        options: [
            {value: '0-499', label: '0-499'},
            {value: '499-1599', label: '499-1599'},
            {value: '1599-2599', label: '1599-2599'},
            {value: '2599-4999', label: '2599-4999'},
        ]
    },
    {
        id: 'discount',
        name: 'DISCOUNT RANGE',
        options: [
            {value: '20', label: '20% and Above'},
            {value: '30', label: '30% and Above'},
            {value: '40', label: '40% and Above'},
            {value: '50', label: '50% and Above'}
        ]
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            {value: 'in-stock', label: 'In Stock'},
            {value: 'out-of-stock', label: 'Out of Stock'},
        ]
    }
]