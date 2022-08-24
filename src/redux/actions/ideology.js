export const setIdeologyNumber = (number) => {
    return {
        type: "IdeologyNumber",
        payload: {
            position : number
        }
    }
}
