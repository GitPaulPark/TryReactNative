import React,{Component} from "react";
import {Container,Box} from "@mui/material";

class InfiniteScroll extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        console.log(this.myRef)
    }
    handleScroll = (event) => {
        console.log("scroll starts")
        console.log(event)
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    }

    render() {
        return (
            <Container>
                <div style={{height:50, backgroundColor:"blue"}}></div>
                <Box style={{height:100,overflow: 'scroll',
                }} onScroll={(event)=>this.handleScroll(event)}>
                    <div ref={this.myRef} ></div>
                </Box>

            </Container>
        );
    }

}
export default InfiniteScroll;