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

    if (error) {
        return <p className="m-[10%] text-center text-red-500">{error}</p>;
    }

    if (!article) {
        return <p className="text-center text-lg">Article not found.</p>;
    }

    return (
        <div>
            <div className="container mx-auto mt-8 px-4">
                {/* Back to Komnews Link */}
                <Link
                    to="/komnews"
                    className="text-blue-500 hover:underline mb-4 inline-block"
                >
                    &larr; Back to Komnews
                </Link>

                {/* Article Content */}
                {article ? (
                    <>
                        {/* Article Title */}
                        <h1 className="text-5xl font-bold mb-4 text-left">
                            {article.title}
                        </h1>

                        {/* Creation Date */}
                        <p className="text-gray-700 text-left mb-4">
                            {article.created_at
                                ? new Date(
                                      article.created_at
                                  ).toLocaleDateString("id-ID", {
                                      weekday: "long",
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                  })
                                : "Date not available"}
                        </p>

                        {/* Article Image */}
                        {article.imageUrl && (
                            <div className="flex flex-col items-center justify-center mb-4">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-[280px] mb-2 shadow-lg sm:w-[250px] md:w-[300px] lg:w-[600px]"
                                />
                            </div>
                        )}

                        {/* Article Content */}
                        <div
                            className="text-lg leading-relaxed mb-8 px-4"
                            dangerouslySetInnerHTML={{
                                __html: article.content,
                            }}
                        />

                        {/* Article Categories */}
                        <div className="mt-2 grid grid-cols-3 gap-x-3 gap-y-2 mb-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                            {article.categories &&
                            article.categories.length > 0 ? (
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
                    /* Article Not Found */
                    <p className="text-center text-lg">Article not found.</p>
                )}
            </div>
        </div>
    );
}

export default KomnewsSingle;
