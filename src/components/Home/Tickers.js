"use client"
import React, { Component } from 'react'
import Ticker, { NewsTicker } from 'nice-react-ticker';
import { sortBlogs } from "@/src/utils";
import NewsTickers from "../Blog/NewsTickers";

const Tickers = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <div className="newsticker">
            <Ticker show={true} isNewsTicker={true} slideSpeed={30}>
            {sortedBlogs.slice(0, 5).map((blog, index) => {
                    return (
                        <NewsTickers blog={blog} key={blog.id} />
                    );
                })}
            </Ticker>
        </div>
    );
}

export default Tickers;