import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../molecules/Header";
import NewsCard from "../molecules/NewsCard";

const NewsFeed = ({ pathname }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://content.guardianapis.com/${pathname}?page=1&page-size=10&api-key=8be27dec-dac1-4a6c-8749-0e519052a797`)
            .then(res => {
                const news = res.data.response.results;
                setNews(news);
            })
            .catch(err => console.log(err))
    }, [pathname])

    return (
        <div>
            <Header title={pathname} />
            <div>

                <div className="flex items-end mt-12 pb-2 border-b border-gray-200 font-bold">
                    <h4 className="flex-grow ">Last news</h4>
                    <div className="flex text-xl items-center">
                        <div className="text-2xl cursor-pointer">
                            <FaChevronLeft />
                        </div>
                        <div className="mx-3 pt-1">
                           Page 10
                        </div>
                        <div className="text-2xl cursor-pointer">
                            <FaChevronRight />
                        </div>
                    </div>

                </div>
                <div className="mt-8 grid gap-10">
                    {
                        news && news.map(article => <NewsCard
                                key={article.id}
                                id={article.id}
                                title={article.webTitle}
                                externalUrl={article.webUrl}
                                section={pathname}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;