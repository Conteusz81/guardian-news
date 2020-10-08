import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../molecules/Header";
import NewsCard from "../molecules/NewsCard";

const NewsFeed = ({ pathname }) => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        axios.get(`https://content.guardianapis.com/${pathname}?page=${page}&page-size=10&api-key=8be27dec-dac1-4a6c-8749-0e519052a797`)
            .then(res => {
                const news = res.data.response.results;
                const pages = res.data.response.pages;
                setNews(news);
                setMaxPage(pages);
            })
            .catch(err => console.log(err))
    }, [pathname, page]);

    useEffect(() => {
        setPage(1);
    }, [pathname]);

    const prevPage = () => {
        if (page > 1) {
            setPage(prevState => prevState - 1);
        }
    }

    const nextPage = () => {
        if (maxPage > page) {
            setPage(prevState => prevState + 1);
        }

    }

    return (
        <div>
            <Header title={pathname} />
            <div>

                <div className="flex items-end mt-12 pb-2 border-b border-gray-200 font-bold">
                    <h4 className="flex-grow ">Last news</h4>
                    <div className="flex text-xl items-center">
                        <div className="text-2xl cursor-pointer" onClick={prevPage}>
                            <FaChevronLeft />
                        </div>
                        <div className="mx-3 pt-1">
                           Page {page}
                        </div>
                        <div className="text-2xl cursor-pointer" onClick={nextPage}>
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