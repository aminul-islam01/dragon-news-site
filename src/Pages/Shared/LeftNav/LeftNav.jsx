import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dragon-news-server-site-aminul-islam01.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories)
    return (
        <div>
            <h5 className='mb-4 fw-bold'>All Category</h5>
            <h5 className='bg-secondary bg-opacity-25 p-3 fw-bold rounded text-center'>National News</h5>
            <div className='ps-5'>
                {
                    categories.map(category => <p key={category.id}>
                        <NavLink to={`category/${category.id}`} 
                        className={({ isActive}) => isActive? "text-danger text-decoration-none fw-bold" : "text-decoration-none text-secondary"}>
                            {category.name}
                        </NavLink>
                    </p>)
                }
            </div>
        </div>
    );
};
// className='text-decoration-none text-secondary'
export default LeftNav;