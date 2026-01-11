import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default function Products() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [inputValue, setInputValue] = useState(""); 
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      const skip = (currentPage - 1) * limit;
      
      // Nếu có searchTerm thì dùng link search, nếu không thì dùng link gốc
      const url = searchTerm 
        ? `https://dummyjson.com/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

      try {
        const response = await axios.get(url);
        setData(response.data.products);
        setTotal(response.data.total);
      } catch (error) {
        console.error("Lỗi gọi API:", error);
      }
    };

    fetchData();
  }, [currentPage, searchTerm]); // Gọi lại khi đổi trang HOẶC đổi từ khóa tìm kiếm

  // Hàm xử lý khi nhấn nút Tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue); // Cập nhật searchTerm để kích hoạt useEffect
    setCurrentPage(1); // Reset về trang 1 khi tìm kiếm mới
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- KHU VỰC TÌM KIẾM --- */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl font-bold mb-6">Cửa hàng sản phẩm</h1>
          <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
            <input
              type="text"
              placeholder="Nhập tên sản phẩm (vd: phone, laptop...)"
              className="flex-1 px-4 py-2 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none transition-all"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all"
            >
              Tìm
            </button>
          </form>
          {searchTerm && (
            <p className="mt-3 text-gray-600 italic">
              Kết quả tìm kiếm cho: "<strong>{searchTerm}</strong>" ({total} sản phẩm)
            </p>
          )}
        </div>

        {/* --- GRID SẢN PHẨM --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.length > 0 ? (
            data.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
    <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-contain mb-4" />
    <h2 className="font-bold text-gray-800 line-clamp-1">{item.title}</h2>
    <p className="text-xl font-bold text-blue-600 mt-2">${item.price}</p>

    {/* Nút Xem chi tiết dùng thẻ Link */}
    <NavLink 
      to={`/product/${item.id}`} 
      className="mt-4 block text-center py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
    >
      Xem chi tiết
    </NavLink>
  </div>

            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 py-10">Không tìm thấy sản phẩm nào!</p>
          )}
        </div>

        {/* --- PHÂN TRANG --- */}
        {totalPages > 1 && (
          <div className="flex justify-center flex-wrap gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full font-bold transition-all ${
                  currentPage === page
                    ? "bg-yellow-400 text-white scale-110 shadow-lg"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}