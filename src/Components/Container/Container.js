import { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import './Container.css';
import Data from '../../Data';


class Container extends Component {
    state =
        {
            show: false,
            Data,
            targetPage: {},
            targetComment: {}

        }

    handelClick = (e) => {
        this.setState({ show: true })
        let currentIdPage = e.target.id;
        this.state.Data.posts.filter((item) => {
            if (item.id == currentIdPage) {
                this.setState({ targetPage: item })
            }
        });
        this.state.Data.comments.filter((comment) => {
            if (comment.id == currentIdPage) {
                this.setState({ targetComment: comment })
            }
        })


    }
    render() {
        const { posts } = this.state.Data;
        const { title, body, image } = this.state.targetPage;
        const { body: bodyComment } = this.state.targetComment;

        return (
            <>
                <SideBar posts={posts} handelClick={this.handelClick} />
                {this.state.show ?
                    <div id="content" className='mt-4'>
                        <div className='image'>
                            <img src={`assets/${image}`} />
                        </div>
                        <div className="col-lg-8 ">
                            <p className=' title'>{title}</p>
                            <p>{body}</p>
                        </div>

                        <div className='comment '><p className='h4'>Comment:</p>{bodyComment}</div>


                    </div> : null
                }

            </>
        );
    }
}

export default Container;