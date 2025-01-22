export const isAuthorised = async () => {
    await new Promise(resolve => setTimeout(resolve, 200)); //имитация задержки (можно удалить)
    // сюда можно написать логику для проверки авторизации
    return true;
}

export default () => { }