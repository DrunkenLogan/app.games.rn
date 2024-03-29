import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
            <Path
                fill="#ffb74f"
                d="M432.106 250.534v219.487H296.578V336.975h-75.179v133.046H79.894V250.534L256 115.075z"
            />
            <Path
                d="M439.485 183.135V90.306h-74.167v35.772L256 41.979 0 238.92l53.633 69.712L256 152.959l202.367 155.672L512 238.92l-72.515-55.785z"
                fill="#ff7d3c"
            />
            <Path
                fill="#ff9a00"
                d="M432.106 250.534v219.487H296.578V336.975H256v-221.9z"
            />
            <Path
                fill="#ff4e19"
                d="M512 238.92l-53.633 69.712L256 152.959V41.979l109.318 84.099V90.306h74.167v92.829z"
            />
        </Svg>
    )
}

export default HomeIcon;
