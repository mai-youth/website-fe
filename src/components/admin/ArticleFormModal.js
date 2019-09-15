import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';

class ArticleFormModal extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
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

  submit(e) {
    const { form } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(form);
    this.toggleModal();
  }

  render() {
    const { trigger, modalTitle, defaultValues } = this.props;
    const { modalOpen } = this.state;

    return (
      <Modal
        centered={false}
        open={modalOpen}
        trigger={React.cloneElement(trigger, { onClick: this.toggleModal })}
        onClose={this.toggleModal}
      >
        <Modal.Header>{modalTitle}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.submit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Title"
                placeholder="Article Title"
                defaultValue={defaultValues.title}
                onChange={e => this.handleFormChange(e, 'title')}
                required
              />
              <Form.Input
                fluid
                label="Author"
                placeholder="MAI Youth Team"
                defaultValue={defaultValues.author}
                onChange={e => this.handleFormChange(e, 'author')}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Article Body"
              placeholder="Article goes here..."
              defaultValue={defaultValues.body}
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

ArticleFormModal.defaultProps = {
  modalTitle: 'New Article',
  defaultValues: {},
};

ArticleFormModal.propTypes = {
  trigger: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
  defaultValues: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default ArticleFormModal;
