import React from "react";
import { createIconSetFromFontello } from "react-native-vector-icons";
import iconConfig from "./iconConfig.json";
const Icon = createIconSetFromFontello(iconConfig);

export class Hamburger extends React.PureComponent{
    render(){
        return(
            <Icon name="hamburger" size={14} color="#716AFF" />
        )
    }
}

export const Close = () => <Icon name="close" size={16} color="#716AFF" />;
export const Magnifier = () => <Icon name="magnifier" size={20} color="#716AFF" />;
export const Pencil = () => <Icon name="pencil" size={24} color="#F4F4F4" />;
export const DarkPencil = () => <Icon name="pencil" size={18} color="#545454" />;
export const Trash = () => <Icon name="trash" size={24} color="#F4F4F4" />;
export const Label = () => <Icon name="label" size={21} color="#716AFF" />;
export const Checkmark = () => <Icon name="checkmark" size={16} color="#716AFF" />;