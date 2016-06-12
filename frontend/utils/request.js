import { backend } from '../config'
import bb from 'bluebird'

const request = (path, data, type = 'GET') => {
  return new bb.Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const uri = encodeURI(`${backend.hostname}:${backend.port}${path}`)
    console.log(uri)
    xhr.open(type, uri);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr)
        try {
          const response = JSON.parse(xhr.responseText)
          resolve(response)
        } catch (error) {
          reject(xhr)
        }
      } else {
        reject(xhr)
      }
    }

    xhr.send(data)
  })
}

export default request
