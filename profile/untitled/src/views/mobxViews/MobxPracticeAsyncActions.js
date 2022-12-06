import React, {Component} from 'react';
import {inject, observer} from "mobx-react"
import {Button, Paper,TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

class MobxPracticeAsyncActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: false,
            bringMore :false,
        }
    }
    componentDidMount() {
        // const { practiceStore } = this.props;
        // const config = this.setUpConfigToRequest();

        // practiceStore.testServerRequest( config.url , config.receiveState , config.requestType, config.callback );

    }

    setUpConfigToRequest = () => {
        const { practiceStore } = this.props;
        const url = '/naverSearch'
        const receiveState = practiceStore.friends
        const requestType = 'getSearchNaverInfo'
        const callback = this.getResult;
        return { url, receiveState, requestType, callback } ;

    }



    setUpConfigToPostRequest = () => {
        const { practiceStore } = this.props;
        const url = '/naverSearch';
        const receiveState = practiceStore.friends;
        const requestType = 'postSearchNaverInfo';
        const data = practiceStore.searchForm.searchWord;
        const callback = this.getResult;
        return { url, receiveState, requestType, data,callback } ;

    }
    getResult = ( state ) => {
        const receivedState = state;
        this.props.practiceStore.setConfigReceiveState( receivedState );
        this.setState({
            isDisplay:true
        })
        console.log( " received from the state Component :  ", receivedState );
    }

    handleButtonClick = () => {
        const { practiceStore } = this.props;
        this.setState({
            bringMore:true
        })
        const config = this.setUpConfigToPostRequest();

        practiceStore.searchRequest( config.url , config.receiveState , config.requestType, config.data ,config.callback );



    }
    handleSearchWords = (event) => {
        const { practiceStore } = this.props;
        practiceStore.typeWords(event.target.value)
    }


    render() {
        const { config,isDisplayReady } = this.props.practiceStore;
        const { isDisplay } = this.state;
        console.log( config.receiveState )
        return (
            <>
                <Container fixed maxWidth="sm">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }} >
                        <Paper >
                <TextField
                    onChange={this.handleSearchWords}
                />
                <Button
                    onClick = { this.handleButtonClick }
                >
                    click here to see the result
                </Button>
                            {isDisplayReady &&
                                    <div>
                                        <hr/>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>
                                                    title
                                                </th>
                                                <th>
                                                    link
                                                </th>
                                                <th>
                                                    category
                                                </th>
                                                <th>
                                                    description
                                                </th>
                                            </tr>
                                            </thead>
                            { config.receiveState.items.map(( items,index ) => {
                                return(

                                    <tbody
                                        key = { index }
                                    >
                                            <tr>
                                                <td>
                                                    <span dangerouslySetInnerHTML={{__html: items.title}}/>
                                                </td>
                                                <td>
                                                    <a href = { items.link } target="_blank"   rel="noopener"> 보러가기</a>
                                                </td>
                                                <td>
                                                    { items.category }
                                                </td>
                                                <td>
                                                 { items.description }
                                                </td>
                                                <td>
                                                    <hr/>
                                                </td>
                                            </tr>
                                    </tbody>
                                )})}
                                        </table>
                                    </div>
                            }
                        </Paper>
                    </Box>
                </Container>
            </>
        )
    }

}

export default inject( 'practiceStore' )( observer( MobxPracticeAsyncActions ) );