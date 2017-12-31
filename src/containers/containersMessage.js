import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from './../components/Message'
import PropTypes from 'prop-types'

class messageContainers extends Component {
    render() {
        var { message } = this.props
        return (
            <Message message={message} />
        )
    }

}

messageContainers.proptypes = {
    message: PropTypes.string
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}



export default connect(mapStateToProps, null)(messageContainers);
