import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
            setError("Error fetching article");
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
                <Link
                    to="/komnews"
                    className="text-blue-500 hover:underline mb-4 inline-block"
                >
                    &larr; Back to Komnews
                </Link>

                {error && <p className="text-center text-red-500">{error}</p>}

                {article ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4 text-left">
                            {article.title}
                        </h1>
                        {/* Gambar Artikel */}
                        {article.imageUrl && (
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full object-cover mb-4 rounded-lg max-h-80"
                            />
                        )}
                        {/* Tanggal Pembuatan */}
                        <p className="text-gray-700 text-left mb-4">
                            {article.created_at
                                ? new Date(
                                      article.created_at
                                  ).toLocaleDateString()
                                : "Date not available"}
                        </p>
                        {/* Isi Artikel */}
                        <div
                            className="text-lg leading-relaxed mb-8 px-4"
                            dangerouslySetInnerHTML={{
                                __html: article.content,
                            }}
                        />

                        {/* Kategori */}
                        <div className="mt-2 grid grid-cols-3 gap-x-3 gap-y-2 mb-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                            {article.categories ? (
                                article.categories.map((category, index) => (
                                    <Link
                                        key={index}
                                        className="mt-1 mb-5 border border-black text-[10px] border-2 bg-white font-semibold px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F1880A] hover:text-white sm:text-[12px] md:text-[15px] lg:text-[18px]"
                                    >
                                        {category.name}
                                    </Link>
                                ))
                            ) : (
                                <p className="text-center">
                                    No categories available.
                                </p>
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
