import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import { addArticle } from '../../actions/articles';

class NewArticleModal extends PureComponent {
  constructor(props) {
    super(props);
    this.addArticle = this.addArticle.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      form: {
        author: 'MAI Youth Team',
        body: null,
        title: null,
      },
      modalOpen: false,
    };
  }

  handleFormChange(event, field) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [field]: event.target.value,
      },
    });
  }

  toggleModal() {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen });
  }

  addArticle(e) {
    const { form } = this.state;
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.addArticle(form);
    this.toggleModal();
  }

  render() {
    const { trigger } = this.props;
    const { modalOpen } = this.state;

    return (
      <Modal
        centered={false}
        open={modalOpen}
        trigger={React.cloneElement(trigger, { onClick: this.toggleModal })}
        onClose={this.toggleModal}
      >
        <Modal.Header>New Article</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.addArticle}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Title"
                placeholder="Article Title"
                onChange={e => this.handleFormChange(e, 'title')}
                required
              />
              <Form.Input
                fluid
                label="Author"
                placeholder="MAI Youth Team"
                onChange={e => this.handleFormChange(e, 'author')}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Article Body"
              placeholder="Article goes here..."
              onChange={e => this.handleFormChange(e, 'body')}
              required
            />
            <Button positive type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

NewArticleModal.propTypes = {
  addArticle: PropTypes.func.isRequired,
  trigger: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
});

export default connect(null, mapDispatchToProps)(NewArticleModal);
