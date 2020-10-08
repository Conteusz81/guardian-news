export const pathNameSlice = (pathname) => {
    return pathname.slice(1);
}

export const articleExists = (store, newArticle) => {
    return store.some(article => article.id === newArticle.id);
}