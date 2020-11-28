import React, { Component } from 'react'

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {

        const {title} = this.props

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
}

export default Add
