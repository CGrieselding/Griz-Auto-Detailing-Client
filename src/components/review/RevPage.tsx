import React, {Component} from "react";
import RevPost from "./RevPost"
import RevAll from "./RevAll"

type PropsType = {
    token: string
}

export default class RevPage extends Component<PropsType, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <>
            <RevPost token={this.props.token} />
            <RevAll token={this.props.token} />
            </>
        )
    }
}