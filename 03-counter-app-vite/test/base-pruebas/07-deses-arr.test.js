const retornaArreglo = () =>{
    return ['ABC', 123];
}

describe('Pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y un número', () => {
        const [letters, numbers] = retornaArreglo();
        
        expect( letters ).toBe('ABC')
        expect( numbers ).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
    });
});