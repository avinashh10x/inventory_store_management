import { Client, Databases, ID, Query } from "appwrite";



const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);




const databases = new Databases(client);

// products 

const createProduct = async (product) => {
    try {
        const response = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCTS_ID,
            ID.unique(),
            product
        )
    } catch (error) {
        console.log(error + ' from creating a document function from service file')
        throw error
    }
};


const listProducts = async () => {
    try {
        const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCTS_ID,
            [Query.orderDesc('$createdAt')]

        )
        return response
    } catch (error) {
        console.log(error + " from list product function from service file")
        throw error
    }
}


const updateProduct = async (productId, value) => {
    try {
        const response = await databases.updateDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCTS_ID,
            productId,
            value
        )
        return response
    } catch (error) {
        console.log(error + ' from updating a document function from service file')
        throw error
    }
}


// category

const createCategory = async (name) => {
    try {
        const response = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_CATGEORY_ID,
            ID.unique(),
            {
                name: name
            }
        )
    } catch (error) {
        console.log(error + ' from creating a document function from service file')
        throw error
    }
};



const listCategory = async () => {
    try {
        const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_CATGEORY_ID,
            [Query.orderDesc('$createdAt')]
        )
        return response
    } catch (error) {
        console.log(error + " from list product function from service file")
        throw error
    }
}


// history

const createHistory = async (value) => {
    try {
        const response = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_HISTORY_ID,
            ID.unique(),
            value
        )
        return response
    } catch (error) {
        console.log(error + 'from creating a document function from service file')
        throw error
    }

}
const showHistory = async () => {
    try {
        const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_HISTORY_ID,
            [Query.orderDesc('$createdAt')]
        )
        return response
    } catch (error) {
        console.log(error + " from list product function from service file")
        throw error
    }
}



export {
    createProduct,
    listProducts,
    listCategory,
    createCategory,
    updateProduct,
    createHistory,
    showHistory,
}