import React, { Component } from 'react';

import './sass/content/comments-block.css';
import './sass/active/comments-form.css';
import './sass/content/comments-list.css';
import Comment_item from "./Comment_item";
import My_btn from "./My_btn";

class Comments_block extends Component {
    render() {
        return (
            <section className="comments-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <form>
                                <h3>Add comment</h3>
                                <ul className="d-flex justify-content-between flex-wrap comments-form">
                                    <li className="comments-form-item">
                                        <p><label for="name">Name</label></p>
                                        <input type="text" name="name" id="name"/>
                                    </li>
                                    <li className="comments-form-item">
                                        <p><label for="mail">Email</label></p>
                                        <input type="email" name="email" id="mail"/>
                                    </li>
                                    <li className="comments-form-item">
                                        <p><label for="site">Website (optional)</label></p>
                                        <input type="text" name="site" id="site"/>
                                    </li>
                                    <li className="comments-form-item">
                                        <p><label for="message">Message</label></p>
                                        <textarea name="message" id="message"></textarea>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-end">
                                    <My_btn text="Add comment"/>
                                </div>
                            </form>
                            <section className="comments-list">
                                <h3>24 Comments</h3>
                                <ul className="upper-comment">
                                    <li className="upper-comment-item">
                                        <Comment_item/>
                                    </li>
                                    <li className="lower-comment-item">
                                        <Comment_item/>
                                    </li>
                                    <li className="upper-comment-item">
                                        <Comment_item/>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Comments_block;

