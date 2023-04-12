const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );



describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    });
    test('getHeroeById  debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy()
    });
    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        const universe = 'DC'
        const heroes = getHeroesByOwner(universe)
        expect(heroes.length).toBe(3)
    });
});