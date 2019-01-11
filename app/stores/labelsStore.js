import {observable, action} from "mobx";

class LabelsStore{
    @observable labelsList = labels;

}

const labels = [
    {
        id: 1,
        name: "Home",
        color: ""
    }
]

const labelsStore = new LabelsStore();
export default labelsStore;