import { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import './SideBar.css';



class SideBar extends Component {

    handelPage = (event) => {
        this.props.handelClick(event)
    }

    render() {
        const { posts } = this.props;
        return (
            <>
                <div class="d-flex align-items-start">
                    <nav id="sidebar" className="img">

                        <div className="p-4">

                            <svg xmlns="http://www.w3.org/2000/svg">
                                <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
                                    <feGaussianBlur stdDeviation="90 0"></feGaussianBlur>
                                </filter>
                            </svg>

                            <h1><a href="#" className='logo ' ><span filter-content="P">Posts</span></a></h1>

                            <ul class="list-unstyled components mb-5">
                                {posts.map((list) =>

                                    <li onClick={this.handelPage} key={list.id}>
                                        <a href="#" id={list.id} >{list.title}</a>
                                    </li>
                                )}
                            </ul>
                        </div>

                    </nav>
                </div>
            </>
        );
    }
}

export default SideBar;