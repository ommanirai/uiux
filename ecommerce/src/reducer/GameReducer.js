const initialData = {
    gameName: 'football'
}

export const gameReducer = (state = initialData, action) => {
    switch (action.type) {
        case "CHANGE_GAME":
            return { gameName: action.payload }
        default:
            return state;
    }
}
