import api from "./api";

export const submitQuote = async (formData) => {
  const response = await api.post("/quotes", formData);
  return response.data;
};
