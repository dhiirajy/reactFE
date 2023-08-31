// src/Pages/Blogs.js

import React, { useEffect, useState } from 'react';
import fetchData from '../../Service/apiService';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BlogCard = ({ blog }) => {
  return (
    <Card class="row">
        <Card.Img variant="top" src={blog.image} alt="Blog Image" />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const BlogCardRow = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      fetchData('/blogs')
        .then(apiData => setBlogs(apiData))
        .catch(error => console.error('Error in component:', error));
    }, []);
    return (
      <section className='pt-4 mt-4'>
      <Row>
        {blogs.map((blog, index) => (
          <Col key={index} md={4}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
      </section>
    );
  };

export default BlogCardRow;
