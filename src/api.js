import axios from 'axios';




export const uploadPdf = async (file) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log("BAse", BASE_URL)
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${BASE_URL}/get_details`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
