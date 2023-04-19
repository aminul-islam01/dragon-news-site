import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div>
            <h4 className='mb-4'>All Category</h4>
            <h4 className='bg-secondary bg-opacity-25 p-3 rounded text-center'>National News</h4>
            <div className='ps-5'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;