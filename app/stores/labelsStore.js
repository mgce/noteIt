import {observable, action} from "mobx";

class LabelsStore{
    @observable labelsList = labels;
    @observable colors = labelsColor;

    getColorById(id){
        return this.colors.find(c=>c.id === id);
    }
}

const labels = [
    {
        id: 1,
        name: "Home",
        colorId: 1
    },
    {
        id: 2,
        name: "Work",
        colorId: 2
    },
    {
        id: 3,
        name: "City",
        colorId: 3
    },
]

const labelsColor = [
    {
        id: 1,
        value: "#D5BBA5"
    },
    {
        id: 2,
        value: "#FFB800"
    },
    {
        id: 3,
        value: "#D9E73F"
    },
    {
        id: 4,
        value: "#4A9F4E"
    },
    {
        id: 5,
        value: "#FB6A67"
    },
    {
        id: 6,
        value: "#FF004C"
    },
    {
        id: 7,
        value: "#BA394F"
    },
    {
        id: 8,
        value: "#716AFF"
    },
    {
        id: 9,
        value: "#66ADFF"
    },
    {
        id: 10,
        value: "##2400FF"
    },
]

const labelsStore = new LabelsStore();
export default labelsStore;