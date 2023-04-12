import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Pruebas en el <CounterApp />', () => {
    const initialValue = 100
    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot()
    });
    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {
        render(<CounterApp value={initialValue}/>)
        expect(screen.getByText(initialValue)).toBeTruthy()
        expect(screen.getByTestId('test-value').innerHTML).toContain("" + initialValue)
    });
    test('debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getAllByText('' + (initialValue+1))).toBeTruthy();
    });
    test('debe de decrementar con el botón -1', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getAllByText('' + (initialValue-1))).toBeTruthy();
    });
    test('debe de resetear con el botón reset', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getAllByText('' + initialValue)).toBeTruthy();
    });
});