export const range = (end) => {
    const { result } = Array.from({ length: end }).reduce(({ result, current }) =>
    ({
        result: [...result, current],
        current: current + 1
    }), { result: [], current: 1 })

    return result
}

export const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}