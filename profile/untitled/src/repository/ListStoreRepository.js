import {Repository} from "./Repository";

export default class ListStoreRepository extends Repository {
    constructor(props) {
        super();
        this.requestPrefix = props.serverContextPath + "/api";
        this.requestPrefixUsers = props.serverContextPath + '/api/users';
        this.requestPrefixNaver = props.serverContextPath + '/api/server';
    }


    postListStoreInfo = (url, param) => {
        return this.getRequestPromise('post', this.requestPrefix+ url, param);
    }

    getListStoreInfo = (url) => {
        console.log("getDashboardInfo begins")
        return this.getRequestPromise('get', this.requestPrefix+ url);
    }

    postUsersInfo = (url, param) =>{
        console.log("postUserInfo begins")

        return this.getRequestPromise('post', this.requestPrefixUsers+ url, param);

    }
    getUsersInfo = (url) => {
        return this.getRequestPromise('get', this.requestPrefixUsers+ url);
    }

    getSearchNaverInfo = (url) => {
        return this.getRequestPromise('get', this.requestPrefixNaver+ url);
    }
    postSearchNaverInfo = (url,param) => {
        return this.getRequestPromise('post', this.requestPrefixNaver+ url, param);
    }


}