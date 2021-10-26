import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/blogs/'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(BASE_URL, config)
  return response.data
}

const create = async newBlog => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(BASE_URL, newBlog, config)
  return response.data
}

const updateBlog = async (idBlog, blog) => {
  const config = {
    headers: { Authorization: token }
  }
  return await axios.put(BASE_URL + idBlog, blog, config)
}

const deleteBlog = async (idBlog) => {
  const config = {
    headers: { Authorization: token }
  }
  return await axios.delete(BASE_URL + idBlog, config)
}

const exportedFunctions = {
  setToken,
  getAll,
  create,
  updateBlog,
  deleteBlog
}

export default exportedFunctions
