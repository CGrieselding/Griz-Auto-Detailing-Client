// NOTE: import RevEdit to this page!
/* THIS PAGE WILL:
    - DISPLAY A USERS REVIEW AND INQUIRY
    - GIVE USER THE ABILITY TO UPDATE & DELETE A REVIEW AND INQUIRY */

import React, {Component} from "react";

export default class YourActivityPage extends Component {

    myActivity = () => {
        fetch("http://localhost:4000/user/myInfo", {
            
        })
    }

    render() {
        return(
            <>
            <h1>Your Activity</h1>
            </>
        )
    }
}