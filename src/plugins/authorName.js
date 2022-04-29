const authorName = {
    install: (app, options) => {
        app.config.globalProperties.$authorName = 'van dat';
    },
};

export default authorName;
