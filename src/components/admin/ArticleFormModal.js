import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';
import RichTextEditor from './RichTextEditor';

class ArticleFormModal extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.save = this.save.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      form: {
        author: 'MAI Youth Team',
        body: null,
        title: null,
      },
      modalOpen: false,
      // eslint-disable-next-line react/no-unused-state
      articleState: 'editing',
    };
  }

  handleFormChange(value, field) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [field]: value,
      },
    });
  }

  handleBodyChange(richText) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        body: richText,
      },
    });
  }

  toggleArticleState(event) {
    if (event.target.id === 'submit') {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ articleState: 'submitArticle' });
    } else if (event.target.id === 'save') {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ articleState: 'saveArticle' });
    }
  }

  toggleModal() {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen });
  }

  handleArticleState() {
    const { article } = this.state;
    if (article.articleState === 'submitArticle') {
      this.submit();
    } else if (article.articleState === 'saveArticle') {
      this.save();
    }
  }

  submit(e) {
    const { form } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(form);
    this.toggleModal();
  }

  save() {
    const { form } = this.state;
    const { onSave } = this.props;
    onSave(form);
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
          <Form onSubmit={this.handleArticleState}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Title"
                placeholder="Article Title"
                defaultValue={defaultValues.title}
                onChange={e => this.handleFormChange(e.target.value, 'title')}
                required
              />
              <Form.Input
                fluid
                label="Author"
                placeholder="MAI Youth Team"
                defaultValue={defaultValues.author}
                onChange={e => this.handleFormChange(e.target.value, 'author')}
              />
            </Form.Group>
            <div className="label">Article Body</div>
            <RichTextEditor
              onChange={value => this.handleBodyChange(value, 'body')}
              defaultValue={defaultValues.body}
              placeholder="Article goes here..."
            />
            <Button onClick={this.toggleArticleState} positive type="submit">Submit</Button>
            <Button onClick={this.toggleArticleState} type="submit">Save</Button>
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
  onSave: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
  defaultValues: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default ArticleFormModal;
