const counter = require('./counter');

test('increment increments', () => {
    expect (
      counter(0, { type: 'INCREMENT' })
    ).toEqual(1);
    expect (
      counter(1, { type: 'INCREMENT' })
    ).toEqual(2);
});

test('decrement decrements', () => {
    expect (
      counter(2, { type: 'DECREMENT' })
    ).toEqual(1);
    
    expect (
      counter(1, { type: 'DECREMENT' })
    ).toEqual(0);
});

test('other others', () => {
    expect (
        counter(1, { type: 'SOMETHING_ELSE' })
    ).toEqual(1);
    
    expect (
      counter(undefined, {})
    ).toEqual(0);
});

