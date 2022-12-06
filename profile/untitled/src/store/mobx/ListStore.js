import React from 'react';
import {makeAutoObservable,spy} from "mobx";


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
export default class ListStore{

    constructor(props) {
        this.listStoreRepository = props;
        this.testResult = null;
        this.config = {
            url:'',
            receiveState:'',
            type:'',
            afterRequest: null,
            data: Object.assign({},signUpForm),
        }
        this.loginUser = Object.assign({},loginForm)
        this.userInfo = Object.assign({},loginForm)


        makeAutoObservable(this);

        // spy(event => {
        //     if (event.type === "action") {
        //         console.log(`${event.name} with args: ${event.arguments}`)
        //     }
        // })
    }

    setSignUpUserInfo =(category, value)=>{
        this.config.data[category] = value
        console.log(category,":",this.config.data[category])
    }

    setUpLoginForm = (category, value)=>{
        this.loginUser[category] = value;
        console.log(category,":",this.loginUser[category])

    }


    setConfigUrl = (url)=>{
        this.config.url = url
    }
    setConfigReceiveState = (receiveState)=>{
        this.config.receiveState = receiveState
    }
    setConfigCallbackFunc = (func)=>{
        this.config.func = func
    }
    setConfigType = (type)=>{
        this.config.type = type
    }
    setConfigAfterRequestFunc = (afterRequest)=>{
        this.config.afterRequest = afterRequest
    }
    setDataUpForPost = (data)=>{
        this.config.data = data;
    }

    * getRequestMethod ({url, receiveState, type, afterRequest}){
        console.log(url, receiveState, type, afterRequest)
        try {
            receiveState =  yield this.listStoreRepository[type](url)
            console.log("success! ", receiveState )
        }catch (e) {
            console.log(e)
        }finally {
            afterRequest && afterRequest(receiveState);
        }

    }

    * postRequestMethod ({url,receiveState, type, afterRequest,data}){
        console.log(url, receiveState, type, afterRequest,data)
        try {
             yield this.listStoreRepository[type](url,data)
            console.log("success! " )
        }catch (e) {
            console.log(e)
        }finally {
            afterRequest && afterRequest();
        }

    }

    testCallbackFuncGet = (item)=>{
        console.log("TestCallback working",item)
}
    testCallbackFuncPost = ()=>{
        console.log("TestCallback working")
    }





    * testServerRequest(){

        this.setConfigUrl('/workout');
        this.setConfigReceiveState(this.testResult);
        this.setConfigType('getListStoreInfo');
        this.setConfigAfterRequestFunc(this.testCallbackFuncGet)
        this.getRequestMethod(this.config)
    }

    * signUp(){
        this.setConfigUrl('/signup');
        this.setConfigType('postUsersInfo');
        this.setConfigAfterRequestFunc(this.testCallbackFuncPost)
        this.postRequestMethod(this.config);
    }

    * singIn(){

    }
    * checkLogin(){

    }


}