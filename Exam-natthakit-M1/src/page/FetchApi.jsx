import React, { useState, useEffect } from 'react'

function Api() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(items => {
                setData(items.products);
            });
    }, []);
    return (
        <div>
            {data.map((e) => {
                return (
                    <div key={e.id}>
                        <p>{e.title}</p>
                        <img src={e.images && e.images[0]} alt={e.title} /> {}
                    </div>
                );
            })}
        </div>
    );
}

export default Api