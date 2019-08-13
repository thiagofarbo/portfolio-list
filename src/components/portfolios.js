import React from 'react';

const Portfolios = ({ portfolios }) => {

    return (
        <div>
            <center><h1>Portfolio List</h1></center>
            {portfolios.map((portfolio) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{portfolio.name}</h5>
                        <h5 class="card-text">{portfolio.email}</h5>
                        <h5 class="card-text">{portfolio.city}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{portfolio.address}</h6>
                        <p class="card-text">{portfolio.skills}</p>
                    </div>
                </div>
            ))}
        </div>
    )
    };
export default Portfolios