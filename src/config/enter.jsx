export const enterKeyUp = (evento, função) => {
    if (evento.key === 'Enter') {
        função()
    }
}
