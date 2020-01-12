export const useStore = (() => {
    let storeInstance;
    const createStoreInstance = () => {
        let store = 'asdasd';

        const getStore = () => {
            return store;
        }
        const setStore = (newStore) => {
            store = newStore;
            return store;
        }
        return [getStore, setStore];
    }


    return () => {
        if (!storeInstance) {
            storeInstance = createStoreInstance()
        }
        return storeInstance
    }

})()