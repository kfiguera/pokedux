export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {

    const featured = [{name: 'MYPOKEMON'}, ...actionInfo.action.payload];
    const updatedAction = {
        ...actionInfo,
        action: {
            ...actionInfo.action,
            payload: featured
        }
    };
    console.group('Featuring Middleware');
    console.log(actionInfo);
    console.groupEnd();
    next(updatedAction);
};