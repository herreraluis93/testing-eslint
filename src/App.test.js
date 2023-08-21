import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

test('button has correct initial color and updates when clicked', () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // expect the backgroud color to be red
  expect(colorButton).toHaveStyle({ "background-color": 'MediumVioletRed'});

  //click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ "background-color": 'MidnightBlue' });

  // expect the button text to be 'Cnage to red
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts enables
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button is enabled when clicked and disabled when clicked again', () => {
  render(<App />);

  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});


test('disable button, button is gray, enable button, button is MediumVioletRed', () => {
  render(<App />);

  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ "background-color": 'gray'});

});

test('change color, disable button, button is gray, enable button, button is MidnightBlue', () => {
  render(<App />);

  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ "background-color": "gray"});
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({"background-color": "MidnightBlue"})
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})