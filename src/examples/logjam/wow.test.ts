import { test, expect, vi } from 'vitest';
import { log } from './log'

//3rd party libraries mocking

// vi.mock('./your/code/somewhere')


// clever way to call fetch #1 case for tests

// requestFromApi('/')

//vi goes to jest and imports from jest
//import { test, expect, jest } from 'vitest';


//mock something or spies something

test('it spies on the multiply method', () => {
    const mock = vi.fn((x?: string) => {
        if (x) {
            return x.repeat(3);
        }
    });



    // a mock is a function that returns nothing


    mock();
    mock();
    const result = mock('wow');
    // example of mocking and the right thing to test
    // example to see it called back // should've called these parameters



    vi.spyOn(console, 'log').mockImplementation(() => {});

    log('log', '1', '2', '3');

    expect(mock).toHaveBeenLastCalledWith('wow');
    // expect(result).toHaveBeenLastCalledWith('wowwowwow');
    //good starting point to get some more test coverage and clarity
    expect(result).toMatchInlineSnapshot('"wowwowwow"');

    // use spies for browser APIs, geolocation, distance algo
    expect(console.log).toHaveBeenCalledWith(1,2,3);

    });
