import React from 'react';
import {makeAutoObservable, spy, toJS} from "mobx";


const signUpForm = {
    name:'',
    email:'',
    password: '',
    phone: '',
    height: '',
    weight: '',

}



const loginForm ={
    email:"",
    password:"",
}
export default class PracticeStore{

    isDisplayReady = false;
    status  = "";
    friends = [];
    searchForm = {
        searchWord:''

    };
    config = {
        url:'',
        receiveState:'',
        type:'',
        data:'',
        afterRequest: null,
        // data: Object.assign( {} , signUpForm ),
    }

    constructor( props ) {

        this.listStoreRepository = props;

        makeAutoObservable( this );
    }
    typeWords = ( words ) => {
        this.searchForm.searchWord = words;
    }

    * testServerRequest( url,receiveState,requestType, callback ) {

        this.setConfigUrl( url );
        this.setConfigReceiveState( receiveState );
        this.setConfigType( requestType );
        this.setConfigAfterRequestFunc( callback );
        this.getRequestMethod( this.config );
    }

    searchRequest  = (url,receiveState,requestType, data ,callback) =>{
        this.setConfigUrl( url );
        this.setConfigReceiveState( receiveState );
        this.setConfigType( requestType );
        this.setConfigData(data)
        this.setConfigAfterRequestFunc( callback );
        this.postRequestMethod( this.config );
    }

    setConfigData = (data) => {
        this.config.data = data;
    }

    setConfigUrl = ( url )=>{
        this.config.url = url;
    }
    setConfigReceiveState = ( receiveState )=>{
        this.config.receiveState = receiveState;
    }
    setConfigCallbackFunc = ( func )=>{
        this.config.func = func;
    }
    setConfigType = ( type )=>{
        this.config.type = type;
    }
    setConfigAfterRequestFunc = ( afterRequest )=>{
        this.config.afterRequest = afterRequest;
    }
    setDataUpForPost = ( data )=>{
        this.config.data = data;
    }
    isDataReadyToDiplay = (bool) =>{
        this.isDisplayReady = bool
    }



    * getRequestMethod ( { url, receiveState, type, afterRequest } ){
        console.log( url, receiveState, type );
        try {
            receiveState = toJS(yield this.listStoreRepository[ type ]( url ));
            console.log("success : ", receiveState)
        }catch (e) {
            console.log( e )
        }finally {
            afterRequest && afterRequest( receiveState );
        }

    }
    * postRequestMethod ( { url, receiveState, type, data ,afterRequest } ){
        console.log( url, receiveState, type,data, afterRequest );
        this.isDataReadyToDiplay(false);
        try {
            receiveState = toJS(yield this.listStoreRepository[ type ]( url, data ));
            console.log("success : ", receiveState)
            afterRequest && afterRequest( receiveState );
            this.isDataReadyToDiplay(true);
        }catch (e) {
            console.log( e )
        }
    }

}