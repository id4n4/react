const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


// Tarea
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(testUser).toEqual(user)
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Juan'

        const testUser = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name)
        expect(testUser).toEqual(user)
    });
});