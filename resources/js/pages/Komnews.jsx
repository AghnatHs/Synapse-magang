import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Untuk navigasi React Router
import headline from "../../assets/pngs/komnews/Headline.png";

const Komnews = () => {
    const [data, setData] = useState({
        title: "",
        categories: [],
        komnews: [],
        headline: {},
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (categorySlug) => {
        setSelectedCategory(categorySlug);
    };

    const filteredKomnews =
        selectedCategory === "All"
            ? data.komnews
            : data.komnews.filter((item) =>
                  item.categories.some(
                      (category) => category.slug === selectedCategory
                  )
              );

    useEffect(() => {
        axios
            .get("/api/komnews")
            .then((response) => {
                setData({
                    title: response.data.title,
                    categories: response.data.categories,
                    komnews: response.data.komnews,
                    headline: response.data.headline,
                });
                setLoading(false);
            })
            .catch((error) => {
                setError("Error fetching data");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-col align-center justify-center container mx-auto mt-8 px-4">
            <div className="flex align-center items-center justify-center  ">
                <h1 className="tracking-wider flex flex-row text-[#f0e4d4] text-border font-thin text-[40px] mb-4 font-sports align-center items-center sm:text-[45px] md:text-[50px]">
                    {data.title}
                </h1>
                <hr className="my-4" />
            </div>

            <div className="flex flex-col items-center justify-center bg-[#FFAB03] p-4 shadow-bottom-right mb-8 border border-2 border-black ">
                <h1 className="text-[25px] tracking-wider flex flex-row text-white text-shadow-black font-thin mb-2 font-sports align-center items-center sm:text-[30px] md:text-[35px]">
                    TODAY HEADLINE!
                </h1>
                <img
                    src={data.headline.imageUrl}
                    alt={data.headline.title}
                    className="w-[180px] mb-2 border border-black border-2 shadow-lg sm:w-[250px] md:w-[300px] lg:w-[350px]"
                />
                <h2 className="text-[20px] font-semibold mb-1 font-monts sm:text-[25px] md:text[30px] lg:text-[35px]">
                    {data.headline.title}
                </h2>
                <p className="mb-4 font-monts text-[13px] text-justify sm:text-[16px] md:text-[20px] lg:text-[24px] ">
                    {data.headline.excerp}
                </p>
                <Link
                    className="w-[10rem] bg-[#F1880A] text-[12px] text-white font-semibold px-3 py-1.5 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-[#F1880A] sm:text-[16px] md:text-[18px] lg:text-[22px] "
                    to={`/komnews/${data.headline.slug}`}
                >
                    Read More
                </Link>
                <hr className="my-1" />
            </div>

            <div className="grid grid-cols-3 gap-x-3 gap-y-2 mb-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                <button
                    onClick={() => handleCategoryClick("All")}
                    className={`border border-black text-[12px] border-2  ${
                        selectedCategory === "All"
                            ? "bg-[#F1880A] text-white"
                            : "bg-white text-[#F1880A]"
                    } font-semibold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F1880A] hover:text-white sm:text-[14px] md:text-[17px] lg:text-[20px]`}
                >
                    All
                </button>
                {data.categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category.slug)}
                        className={`border border-black text-[12px] border-2 ${
                            selectedCategory === category.slug
                                ? "bg-[#F1880A] text-white"
                                : "bg-white text-[#F1880A]"
                        } font-semibold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F1880A] hover:text-white sm:text-[14px] md:text-[17px] lg:text-[20px]`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="flex flex-col lg:my-10">
                {filteredKomnews.slice(selectedCategory === "All" ? 1 : 0).map((item, index) => (
                    <div
                        key={index}
                        className="mb-3 bg-[#ffedc8] m-2 p-4 rounded-md md:p-5.5 lg:p-7"
                    >
                        <h2 className="text-[16px] font-bold mb-1 sm:text-[20px] md:text-[24px] lg:text-[26px] lg:mb-2">
                            {item.title}
                        </h2>
                        <p className="mb-2 text-[12px] text-justify sm:text-[15px] md:text-[18px] lg:text-[20px] lg:mb-4">
                            {item.excerp}
                        </p>
                        <p className="mb-2 text-[12px] font-semibold sm:text-[15px] md:text-[18px] lg:text-[20px] lg:mb-4">
                            {new Date(item.created_at).toLocaleDateString(
                                "id-ID",
                                {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </p>

                        <Link
                            className=" border border-black border-2 text-[10px] bg-[#F1880A] text-white font-semibold px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-[#F1880A] sm:text-[12px] md:text-[15px] lg:text-[18px] "
                            to={`/komnews/${item.slug}`}
                        >
                            Read More
                        </Link>

                        <div className="mt-2 grid grid-cols-3 gap-x-3 gap-y-2 mb-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                            {item.categories.map((category, catIndex) => (
                                <Link
                                    onClick={() => handleCategoryClick(category.slug)}
                                    key={catIndex}
                                    className="mt-1 border border-black text-[10px] border-2 bg-white font-semibold px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F1880A] hover:text-white sm:text-[12px] md:text-[15px] lg:text-[18px]"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Komnews;
