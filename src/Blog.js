import React, { Component, Fragment } from 'react';
import './App.css';
import Post from './components/Post';
import axios from 'axios';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

class Blog extends Component {
    state = {
        post: [],
        visible: false,
        visible2: false,
        updatePost: {
            id: "",
            title: "",
            content: "",
        },
        formPost: {
            title: "",
            content: "",
        }
    }

    //get API
    getAPI = () => {
        axios({
            method: "get",
            url: "http://localhost/rest-ci/index.php/blog",
            headers: {
                accept: "*/*",
            },
        })
            .then((result) => {
                // console.log(result.data);
                this.setState({
                    post: result.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //nampilin modal create post
    showModalAdd = () => {
        this.setState({
            visible: true,
        });
    }

    //nampilin modal update post
    showModalAdd2 = (data) => {
        this.setState({
            ...this.state,
            visible2: true,
            updatePost: {
                ...data
            }
        });
        console.log(data);
    }

    // post API
    handleAddPost = () => {
        if (this.state.formPost.title && this.state.formPost.content) {
            axios({
                method: "POST",
                url: "http://localhost/rest-ci/index.php/blog",
                headers: {
                    "Accept": "*/*",
                },
                data: {
                    title: this.state.formPost.title,
                    content: this.state.formPost.content,
                },
            })
                .then((data) => {
                    alert("New Post has Created!")
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Failed to Create New Post :(")
                })
        } else {
            alert("Input text is required!")
        }
    };

    // put API
    handleUpdatePost = () => {
        if (this.state.updatePost.title && this.state.updatePost.content) {
            axios({
                method: "PUT",
                url: "http://localhost/rest-ci/index.php/blog/" + this.state.updatePost.id,
                headers: {
                    "Accept": "*/*",
                },
                data: {
                    title: this.state.updatePost.title,
                    content: this.state.updatePost.content,
                },
            })
                .then((data) => {
                    alert("New Post has Updated!")
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Failed to Update Post :(")
                })
        } else {
            alert("Input text is required!")
        }
    };

    // handle event perubahan data create
    handleFormChange = (event) => {
        let formPostNew = { ...this.state.formPost };
        formPostNew[event.target.name] = event.target.value;
        this.setState({
            formPost: formPostNew
        })
    }

    // handle event perubahan data update
    handleFormChange2 = (event) => {
        let formPostNew = { ...this.state.updatePost };
        formPostNew[event.target.name] = event.target.value;
        this.setState({
            updatePost: formPostNew
        })
    }

    // method delete API
    handleDelete = (data) => {
        axios({
            method: "delete",
            url: "http://localhost/rest-ci/index.php/blog/" + data,
            headers: {
                "accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((result) => {
                alert("Post deleted!")
                this.getAPI();
            })
            .catch((error) => {
                alert("Failed to Delete Post!")
            })
    }

    componentDidMount() {
        this.getAPI();
    }

    // componentDidUpdate(prevProps,prevState) {
    //     if (prevState.updatePost.content !== this.state.updatePost.content){
    //         alert(`Post "${prevState.updatePost.title}" has updated!`);
    //     }
    //     else if (prevState.updatePost.title !== this.state.updatePost.title){
    //         alert(`Post "${prevState.updatePost.title}" has updated!`);
    //     }
    //     else{}
    // }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <button className="btn-add" onClick={this.showModalAdd}>Create New Post</button>

                {/* modal create post */}
                <Modal
                    title="Create New Post"
                    centered
                    visible={this.state.visible}
                    onOk={this.handleAddPost}
                    onCancel={() => this.setState({ visible: false })}
                    width={650}>
                    <div>
                        <label><h4>Title</h4></label>{" "}
                        <input name="title" type="text" placeholder="title . . . "
                            style={{ height: '40px', width: '100%', border: 'groove', marginBottom: '20px' }}
                            onChange={this.handleFormChange}>
                        </input><br />

                        <label><h4>Content</h4></label>{" "}
                        <textarea name="content" type="text" placeholder="please write your content here . . . ."
                            style={{ height: '200px', width: '100%', border: 'groove', marginBottom: '20px' }}
                            onChange={this.handleFormChange}>
                        </textarea>
                    </div>
                </Modal>

                {/* modal update post */}
                <Modal
                    title="Update Post"
                    centered
                    visible={this.state.visible2}
                    onOk={this.handleUpdatePost}
                    onCancel={() => this.setState({ visible2: false })}
                    width={650}>
                    <div>
                        <label><h4>Title</h4></label>{" "}
                        <input name="title" type="text" placeholder="title . . . " defaultValue={this.state.updatePost.title}
                            style={{ height: '40px', width: '100%', border: 'groove', marginBottom: '20px' }}
                            onChange={this.handleFormChange2} /><br />

                        <label><h4>Content</h4></label>{" "}
                        <textarea name="content" type="text" placeholder="please write your content here . . . ." defaultValue={this.state.updatePost.content}
                            style={{ height: '200px', width: '100%', border: 'groove', marginBottom: '20px' }}
                            onChange={this.handleFormChange2}>
                        </textarea>
                    </div>
                </Modal>

                {/* perulangan data API pake map */}
                {
                    this.state.post.map(post => {
                        return <Post
                            key={post.id}
                            data={post}
                            update={this.showModalAdd2}
                            delete={this.handleDelete}
                        />
                    })
                }
            </Fragment >
        )
    }
}

export default Blog;