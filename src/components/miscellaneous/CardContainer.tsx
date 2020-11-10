import React from "react";

function CardContainer({ children }: any) {
    return (
        <div className="main-container">
            <div className="cards-flex-container">
                {children}
            </div>
        </div>
    );
}

export default CardContainer;