import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function KomnewsSingle() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/komnews/${slug}`);
      setArticle(response.data.komnews); 
    } catch (error) {
      setError('Error fetching article');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div>
      <div className="container mx-auto mt-8 px-4">
        <Link to="/komnews" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Komnews
        </Link>

        {error && <p className="text-center text-red-500">{error}</p>}

        {article ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-left">{article.title}</h1>

            {/* Gambar Artikel */}
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-cover mb-4 rounded-lg max-h-80"
              />
            )}

            {/* Tanggal Pembuatan */}
            <p className="text-gray-700 text-left mb-4">
              {article.created_at ? new Date(article.created_at).toLocaleDateString() : 'Date not available'}
            </p>

            {/* Isi Artikel */}
            <p className="text-lg leading-relaxed mb-8 px-4">{article.content}</p>

            {/* Kategori */}
            <div className="flex flex-wrap mb-14">
              {article.categories ? (
                article.categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/komnews/category/${category.slug}`}
                    className="bg-[#F1880A] text-black  px-4 py-2 mr-2 mt-2 border-4 border-black hover:bg-[#ab732a]"
                  >
                    {category.name}
                  </Link>
                ))
              ) : (
                <p className="text-center">No categories available.</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-center text-lg">Article not found.</p>
        )}
      </div>
    </div>
  );
}

export default KomnewsSingle;
