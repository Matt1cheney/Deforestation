function getFullBlobStorageURL(url) {
    if (url.startsWith("http")) {
        return url;
    }

    // TODO: This is not good for any non-localhost environment
    return `http://localhost:4000/api/get-file/${url}`;
}

export {
    getFullBlobStorageURL
};
