const harvestedFrom = [
    {
        Country: 'South Korea',
        City: 'Seol',
        River: 'Qule'
    },
    {
        Country: 'South Africa',
        City: 'Pretoria',
        River: 'Buluko'
    },
    {
        Country: 'USA',
        City: 'Nashville',
        River: 'Massawa'
    },
    {
        Country: 'Fiji',
        City: 'Suva',
        River: 'Duluwa'
    },
    {
        Country: 'France',
        City: 'Paris',
        River: 'Nopiqa'
    },
]

export const useFishLocation = () => {
    return harvestedFrom.slice()
}