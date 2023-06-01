import React, {Component} from 'react'
import {Modal, Form, Input, Button} from 'antd'
import FormModal from './TradeForm'
import "./Dialog.css"

class SharedFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  
  data = this.props.data[this.props.id - 1];
  
  // state = {,}
  showModelHandler = (e) => {
    // alert(this.data["name"])
    
    if (e) {
      e.stopPropagation()
    }
    this.setState({visible: true,})
  }
  hideModelHandler = () => {
    this.setState({visible: false,})
  }
  handleSubmit = (values) => {
    console.log("values", values);
    this.setState({visible: false,})
  };
  onFinishForm = (values) => {
    console.log("onFinishForm", values);
  }
  
  render() {
    const {children, trigger, param} = this.props
    
    return (
        <span>
          {/*<p></p>*/}
          <button className={"edit-button"} onClick={this.showModelHandler}>
                    生成交易{trigger}
                </button>
                <Modal title={this.props.name || ''}
                       visible={this.state.visible}
                       onOk={this.handleSubmit}
                       onCancel={this.hideModelHandler}
                       okButtonProps={{htmlType: 'submit', form: 'editForm'}}
                >
                    <FormModal
                        data={this.data}
                        formId="editForm"
                        onSubmit={this.handleSubmit}
                    />
                </Modal>
            </span>
    )
  }
}

export default SharedFormModal
