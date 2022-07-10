export const setAuthor = (data) => {
    return {
        type: "AUTHOR",
        payload: {
            authorName : data
        }
    }
}
