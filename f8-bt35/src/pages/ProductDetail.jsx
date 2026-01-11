import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 1. Tạo State để lưu vị trí ảnh đang hiển thị (mặc định là ảnh đầu tiên)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center p-10">Đang tải...</div>;
  if (!product) return <div className="text-center p-10">Không tìm thấy sản phẩm!</div>;

  // 2. Hàm xử lý nút Next/Prev
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CỘT BÊN TRÁI: HÌNH ẢNH */}
        <div className="flex flex-col items-center">
          {/* Ảnh lớn chính */}
          <div className="w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden mb-6 flex justify-center items-center p-4">
            <img 
              src={product.images[currentIndex]} 
              className="w-full h-full object-contain transition-all duration-500" 
              alt="product" 
            />
          </div>

          {/* Danh sách ảnh nhỏ và nút điều hướng */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-90 transition-all"
            >
              Prev
            </button>

            <div className="flex gap-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-20 h-20 border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                    index === currentIndex ? "border-blue-500 scale-105 shadow-md" : "border-transparent opacity-60"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`thumb-${index}`} />
                </div>
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-90 transition-all"
            >
              Next
            </button>
          </div>
        </div>

        {/* CỘT BÊN PHẢI: THÔNG TIN */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-3xl font-bold text-red-500">${product.price}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          
          <div className="flex gap-8 text-blue-500 font-medium mt-4">
            <span>Rating: {product.rating}</span>
            <span>Stock: {product.stock}</span>
          </div>

          <button className="mt-6 bg-blue-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}