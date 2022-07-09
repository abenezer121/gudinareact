export const home = (data) => {
    return {
        type: "HOME",
        payload: {
            authorName : data
        }
    }
}
