import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import ProductInfo from "./ProductInfo";

function ProductMoreInfo(props) {

    const [folding, setFolding] = useState(false);
    const clickInfo = (e) => {
        setFolding(prevState => prevState ? false : true);
    }
    const InfoResult = () => (
        <div>
            <p>{props.detail.description}</p>

        </div>
        
    )


    return (
        <div style={{margin:'2em 0'}}> {/**style={{backgroundColor: 'tomato'}} */}
            <h1 >제품 상세 정보    <FontAwesomeIcon icon={folding ? faChevronUp : faChevronDown} style={{cursor:'pointer'}} onClick={clickInfo}/> </h1>
            {folding ? <InfoResult /> : null}
        </div>
    )
}

export default ProductMoreInfo;