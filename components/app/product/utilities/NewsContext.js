import React, { createContext, useState } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance'

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const { children } = props;

  //Lay danh sach bai viet
  const getNews = async () => {
    try {
      const response = await AxiosInstance().get('/product/getAll')
      return response;
    } catch (error) {
      console.log('getNews Error', error)
    }
    return [];
  }

  //Them hinh anh
  const uploadImage = async (form) => {
    try {
      const response = await AxiosInstance('multipart/form-data')
        .post('/media/upload', form)
      return response.data;
    } catch (error) {
      console.log('uploadImage Error', error)
    }
    return null;
  }

  //Lay thong tin chi tiet bai viet
  const getDetail = async (id) => {
    try {
      const response = await AxiosInstance().get(`/product/${id}/getDetail`)
      return response;
    } catch (error) {
      console.log('getDetail Error', error)
    }
    return [];

  }

  //Tim kiem san pham

  return (
    <NewsContext.Provider
      value={{ getNews, uploadImage, getDetail }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext