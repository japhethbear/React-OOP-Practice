import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            year: ""
        };
    };

    changeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.addNewMovie(this.state);
        this.setState({
            title: "",
            year: ""
        });
    };

    render() {
        return (
            <div>
                <h2>Add Movie</h2>
                <form action="" className='col-md-6 mx-auto' onSubmit={this.submitHandler}>
                    <div className="form-group mt-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" className='form-control' id='title' placeholder='Enter title' onChange={this.changeHandler} value={this.state.title} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="year">Year</label>
                        <input type="text" className='form-control' id='year' placeholder='Enter year' onChange={this.changeHandler} value={this.state.year}/>
                    </div>
                    <button type='submit' className='btn btn-primary mt-3 mb-3'>Submit</button>
                </form>
            </div>
        )
    }
}

export default MovieForm;