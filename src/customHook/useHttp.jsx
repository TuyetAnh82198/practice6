import React, { useState, useCallback } from "react";

const useHttp = (input) => {
  //State tượng trưng cho việc request đã trả về kết quả hay chưa
  const [isLoading, setIsLoading] = useState(false);
  //State tượng trưng cho lỗi xảy ra trong quá trình tạo Request (nếu có)
  const [error, setError] = useState(null);

  const sendRequest = async (todoOj) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(todoOj.url, {
        method: todoOj.method,
        body: todoOj.body
          ? JSON.stringify({ title: input.current.value })
          : null,
        headers: todoOj.headers ? todoOj.headers : {},
      });

      if (!response.ok) {
        throw new Error("Loi");
      }
      const result = await response.json();

      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
