import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from "../molecules/Header";
import NewsCard from "../molecules/NewsCard";

const NewsFeed = ({ pathname }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://content.guardianapis.com/${pathname}?api-key=8be27dec-dac1-4a6c-8749-0e519052a797`)
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
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Last news</h4>
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