const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/${VERSION}/products/`,
        updateProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    },
    users: {
        users: `${API}/api/${VERSION}/users/`,
        postUsers: `${API}/api/${VERSION}/users/`,
        getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`
    },
    categories: {
        getCategories: `${API}/api/${VERSION}/categories/`,
        addCategory: `${API}/api/${VERSION}/categories/`,
        getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`
    },
    files: {
        addFiles: `${API}/api/${VERSION}/files/upload`,
        getFile: (fileName) => `${API}/api/${VERSION}/files/${fileName}`
    }
}

export default endPoints;
