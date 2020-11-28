import React from 'react';

const Index = ({title}) => {
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <p className="mb-0">
                    <h1 className="h3 mb-0 text-gray-800">{title.title}</h1>
                    {title.subtitle}
                </p>
            </div>
        </div>
    )
}

export default Index;
