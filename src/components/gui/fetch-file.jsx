import SBFileUploader from '../../containers/sb-file-uploader.jsx';
import React from 'react';

class Getfile extends React.Component {
    constructor(props) {
        super(props);
        const {
            children,
            loadProject
        }=this.props;
    }
    render () {
        return children();
    }
    componentDidMount() {
        loadProject();
    }
}


export default Getfile;
