const mockApiData = [
    {
        id: 1,
        name: 'Solo'
    },
    {
        id: 2,
        name: 'Chain'
    },
    {
        id:3,
        name: 'Melodrama'
    },
    {
        id: 4,
        name: 'Panda'
    },
    {
        id: 5,
        name: 'Old town road'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
    }, 2000)
};