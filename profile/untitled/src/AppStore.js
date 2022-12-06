import ListStore from "./store/mobx/ListStore";
import PracticeStore from "./store/mobx/PracticeStore"
import ListStoreRepository from './repository/ListStoreRepository'
import { serverContextPath } from "./AppConstants";

const repositoryProps = {
    serverContextPath : serverContextPath
}

const listStoreRepository = new ListStoreRepository( repositoryProps );

export const stores = {
    listStore: new ListStore( listStoreRepository ),
    practiceStore : new PracticeStore( listStoreRepository )
}


