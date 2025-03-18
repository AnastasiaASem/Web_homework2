// BEGIN (write your solution here)
export const getWeekends = (parametr = 'long') => {
    if (parametr === 'short') {
        return ['sat', 'sun'];
    }
    return ['saturday', 'sunday'];
}

// END
