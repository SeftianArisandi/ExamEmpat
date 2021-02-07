import React, { useEffect, useState, useCallback } from 'react';

import axios from 'axios';

const Blog = () => {
    const [data, setData] = useState("");

    const fetchData = useCallback(() => {
        axios({
          method: "GET",
          url:
            "https://dummyapi.io/data/api/post?limit=10",
          headers: {
            "app-id": "601f5789b684d61c880d799c",
          },
        })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    useEffect(()=>{
        fetchData();
    }, [fetchData]);

    console.log(data);

    return (
        <div className="section-vcardbody section-page" id="page-blog">
            <div className="section-blog">
        
                {/* Section title */}
                <h2 className="section-title">Blog</h2>
                {/* /Section title */}  
        
                {/* BLOG POSTS */}
                <div className="blog-posts">

                    {data && data.data.map((value, index)=>{
                        return (
                            <div className="blog-item" key={index}>
                                <div className="blog-item-wrapper">
                                    {/* blog item thumbnail */}
                                    <div className="blog-item-thumb">
                                        <a href="single.html" className="loadPost"><img src={value.image} alt="" /></a>
                                    </div>
                                    {/* /blog item thumbnail */}
                                    {/* Blog item - infos */}
                                    <div className="blog-item-infos">
                                        {/* blog-item-title */}
                                        <div className="blog-item-title-wrapper">
                                            <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">{value.text}</a></h2>
                                        </div>
                                        {/* /blog-item-title */}
                                        {/* blog item - description */}
                                        <div className="blog-item-description">
                                            <p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                                        </div>
                                        {/* /blog-item-description */}
                                        {/* blog item - link */}
                                        <div className="blog-item-link">
                                            <a href={value.link} className="btn btn-default loadPost">See More</a>
                                        </div>
                                        {/* /blog item - link */}
                                    </div>
                                    {/* /blog item - infos */}
                                </div>
                            </div>
                        )
                    })}

                </div>
                {/* /BLOG POSTS */}
        
                {/* Pagination */}
                <div className="section-pagination">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="pagination-numbers">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                            </span>
                        </div>
                    </div>								
                </div>
                {/* /Pagination */}
        
            </div>			
        </div>
    )
}

export default Blog