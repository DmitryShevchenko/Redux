import React from "react";
import {connect} from "react-redux";

 export const About = () => {
    return (
        <div>
            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam justo nisl, at accumsan
                ante facilisis vel. Suspendisse sit amet mollis leo. Sed a mi suscipit, scelerisque mi et, hendrerit
                massa. Suspendisse felis tortor, fringilla in porttitor ac, posuere eget turpis. Suspendisse vestibulum
                felis mauris, ut lacinia velit fermentum at. Donec quis purus eu lorem rutrum cursus. Sed sit amet dolor
                bibendum, mattis lorem sed, molestie eros. Aenean sodales consectetur ante in lacinia. Fusce eleifend
                vitae velit vitae sollicitudin. Etiam sit amet sapien lacus. Cras volutpat nulla ut accumsan sodales.
                Nulla mattis nec massa ut lobortis. Aenean odio sapien, ullamcorper sit amet mollis eu, vestibulum vitae
                metus. Aliquam efficitur neque a sem semper interdum.
            </text>
        </div>
    );
}

export default connect()(About)