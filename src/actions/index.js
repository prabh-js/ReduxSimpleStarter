export const selectBook = (book) => {
    return {
        type: 'SELECTED_BOOK',
        payload: book,
    }
}