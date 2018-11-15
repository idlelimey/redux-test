export const FETCH_DATA = 'fetch_data';

// default function to display redux action format
export function defaultFunction() {
    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: null
    };
}

export function setPage(scrollTop) {
    let p = window.location.hash.replace('#','');
    if(p === '/'){
        p = 'home';
    } else {
        p = p.replace('/','');
    }
    // Scroll to top, function is only used on navigate so no conditions.
    window.scrollTo(0, 0);
    return {
        type: "SET_PAGE",
        payload: p
    };
}

export function setTheme(t) {
    let n = t === 'dark' ? 'light' : 'dark';
    return {
        type: "SET_THEME",
        payload: n
    };
}