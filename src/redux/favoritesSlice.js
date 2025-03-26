import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteEvents: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const event = action.payload;
            const exists = state.favoriteEvents.find(item => item.event_date_id === event.event_date_id);
            if (exists) {
                state.favoriteEvents = state.favoriteEvents.filter(item => item.event_date_id !== event.event_date_id);
            } else {
                state.favoriteEvents.push(event);
            }
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
