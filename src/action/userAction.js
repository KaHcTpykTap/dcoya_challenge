export const SET_COLOR = 'SET_COLOR';
export const SET_MAIN_TEXT = 'SET_MAIN_TEXT';
export const SET_SECONDARY_TEXT = 'SET_SECONDARY_TEXT';
export const SET_COUNTER = 'SET_COUNTER';
export const CHANGE_ANIMATION = 'CHANGE_ANIMATION';
export const CHANGE_LOG = 'CHANGE_LOG';

export const setUserColor = (color) => ({
    type: SET_COLOR,
    payload: color
})

export const changeMainText = (text) => ({
    type: SET_MAIN_TEXT,
    payload: text
})

export const changeSecondaryText = (text) => ({
    type: SET_SECONDARY_TEXT,
    payload: text
})

export const setCounter = (counter) => ({
    type: SET_COUNTER,
    payload: counter
})

export const setUserAnimation = (isAnime) => ({
    type: CHANGE_ANIMATION,
    payload: isAnime
})

export const setLogFile = (log) => ({
    type: CHANGE_LOG,
    payload: log
})

const addZero = (number) => number < 10 ? "0" + number : number;

const newItemLog = (action, payload) => {
    const fullDate = new Date();
    const date = fullDate.getFullYear() + "-" + addZero(fullDate.getUTCMonth()) + "-" + addZero(fullDate.getDate()) + " "
        + addZero(fullDate.getHours()) + ":" + addZero(fullDate.getMinutes()) + ":" + addZero(fullDate.getSeconds());
    return {
        date: date,
        action,
        payload
    }
}

export const setUserCount = (count) => {
    return (dispatch) => {
        fetch('url/user/setCount', {})
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then(user => {
                dispatch(setCounter(user.count));
            })
            .catch(e => {
                // console.log(e.message);
                const action = 'Set count';
                const oldItems = JSON.parse(localStorage.getItem('log')) || [];
                oldItems.push(newItemLog(action, count));
                localStorage.setItem('log', JSON.stringify(oldItems));
                dispatch(setLogFile(oldItems));
                dispatch(setCounter(count));
            })
    }
}


export const setColor = (color) => {
    return (dispatch) => {
        fetch('url/setColor', {})
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then(user => {
                dispatch(setUserColor(user.color));
            })
            .catch(e => {
                // console.log(e.message);
                const action = 'Set color animation';
                const oldItems = JSON.parse(localStorage.getItem('log')) || [];
                oldItems.push(newItemLog(action, color));
                localStorage.setItem('log', JSON.stringify(oldItems));
                dispatch(setLogFile(oldItems));
                dispatch(setUserColor(color));
            })
    }
}

export const setMainText = (text) => {
    return (dispatch) => {
        fetch('url/user/mainText', {})
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then(user => {
                dispatch(changeMainText(user.mainText));
            })
            .catch(e => {
                // console.log(e.message);
                const action = 'Set main text';
                const oldItems = JSON.parse(localStorage.getItem('log')) || [];
                oldItems.push(newItemLog(action, text));
                localStorage.setItem('log', JSON.stringify(oldItems));
                dispatch(setLogFile(oldItems));
                dispatch(changeMainText(text));
            })
    }
}


export const setSecondaryText = (text) => {
    return (dispatch) => {
        fetch('url/user/secondaryText', {})
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then(user => {
                dispatch(changeSecondaryText(user.secondaryText));
            })
            .catch(e => {
                // console.log(e.message);
                const action = 'Set secondary text';
                const oldItems = JSON.parse(localStorage.getItem('log')) || [];
                oldItems.push(newItemLog(action, text));
                localStorage.setItem('log', JSON.stringify(oldItems));
                dispatch(changeSecondaryText(text));
                dispatch(setLogFile(oldItems));
            })
    }
}

export const setAnimation = (flag) => {
    return (dispatch) => {
        fetch('url/user/statusAnimation', {})
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then(user => {
                dispatch(setUserAnimation(user.statusAnimation));
            })
            .catch(e => {
                // console.log(e.message);
                const action = 'Set status animation';
                const oldItems = JSON.parse(localStorage.getItem('log')) || [];
                oldItems.push(newItemLog(action, flag));
                localStorage.setItem('log', JSON.stringify(oldItems));
                dispatch(setUserAnimation(flag));
                dispatch(setLogFile(oldItems));
            });
    };
}

