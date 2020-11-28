import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teachers : []
        }
    }

    componentDidMount() {
        // const url = 
        fetch('http://localhost:8000/api/all')
        .then(res => {
            let json = res.json();
            if(res.status >= 200 && res.status < 300){
                return json;
            }else{
                return json.then(Promise.reject.bind(Promise))
            }
            // console.log(json)
        })
        // url.then((res) => { console.log(res) })
        // .then((messages) => { console.log(messages+'m') })
        // .catch(error => { console.log(error) })
        
    }

    renderData(data, index) {
        return (
            <tr key={ data.id }>
                <td>{ data.name }</td>
                <td>{ data.age }</td>
                <td>{ data.gender }</td>
                <td>{ data.address }</td>
                <td>{ data.phone }</td>
                <td>{ index }</td>
                <td>asasdasd</td>
            </tr>
        )
    }

    render() {
        console.log(this.state.teachers)
        const { title } = this.props
        return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                 <p className="mb-0">
                     <h1 className="h3 mb-0 text-gray-800">{title.title}</h1>
                     {title.subtitle}
                 </p>
             </div>
             <div className="row">
                 <div className="col-12">
                     <div className="card">
                         <div className="card-header">
                             <h4>Teacher's Data</h4>
                         </div>
                         <div className="card-body p-0">
                             <div className="table-responsive">
                                 <table className="table table-hover">
                                     <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Gender</th>
                                                <th>Age</th>
                                                <th>Action</th>
                                            </tr>
                                     </thead>
                                     <tbody>
                                            { this.state.teachers.map(this.renderData) }
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
        )
    }
}

export default Index