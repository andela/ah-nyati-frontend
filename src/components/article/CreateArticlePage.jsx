import React from 'react';
import propTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import { toastr } from 'react-redux-toastr';
import { Editor } from '@tinymce/tinymce-react';
import Loader from 'react-loader-spinner';

import './article.scss';
import { connect } from 'react-redux';
import { createArticle } from '../../actions/article/articles';
import { getCategories } from '../../actions/category/categories';

export class CreateArticle extends React.Component {
  state = {
    form: {
      title: '',
      catId: '',
      tags: '',
      body: 'Write your story',
      description: '',
      images: null,
    },
    pictures: [],
    categories: [],
  };

  timeoutId = null;

  componentDidMount = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.props.history.push('/login', {});
    }

    const { allCategories } = this.props;
    allCategories().then((data) => {
      this.setState({
        categories: data.payload[0].categories,
      });
    });
  };

  onDrop = (pictures) => {
    this.setState(prevState => ({ ...prevState, images: pictures[0] }));

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        images: pictures[0],
      },
    }));
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { form } = this.state;
    const article = { ...form, isDraft: false };
    const { newArticle } = this.props;

    const { body } = form;
    if (body.length < 50) {
      toastr.error('Your Article content should be more than 50 characters');
      return;
    }
    newArticle(article, 'publish').then(({ status }) => {
      if (status === 201) {
        toastr.success('Article successfully created');
        this.props.history.push('/');
      } else {
        toastr.error('Oops something went wrong');
      }
    });
  };

  handleEditorChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        body: target.getContent(),
      },
    }));
  };

  validateEmptyFields = ({ title, catId, body }) => !(body !== '' && title !== '' && catId !== '');

  saveDraft = () => {
    const { form } = this.state;
    const { newArticle } = this.props;
    const article = {
      ...form,
    };
    if (this.validateEmptyFields(form)) {
      return;
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      newArticle(article).then(() => {
        this.setState(prev => ({
          ...prev,
          form: {
            ...prev.form,
          },
        }));
      });
    }, 10000);
  };


  render() {
    const {
      categories, form: {
        title, body, description, catId,
      },
    } = this.state;
    const { errors, isLoading } = this.props;
    if (isLoading) {
      return (
        <div>
          <div className="loader">
            <Loader
              type="Circles"
              color="#2E99D6"
              height={100}
              width={100}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <section className="section">
          <form onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col-sm-8">
                {errors && errors.title && (
                  <span className="red">
                    {' '}
                    {errors.title}
                    {' '}
                  </span>
                )}
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Title"
                  className="Article-Input"
                  required
                  name="title"
                  defaultValue={title}
                  onChange={this.onInputChange}
                  onKeyDown={this.saveDraft}
                />
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Write a short description of your article"
                  className="Article-Input"
                  name="description"
                  defaultValue={description}
                  onChange={this.onInputChange}
                />
                {errors && errors.body && (
                  <span className="red">
                    {' '}
                    {errors.body}
                    {' '}
                  </span>
                )}
                <Editor
                  initialValue={body}
                  apiKey="z4ea4n1he2tp6mka3q7wwqy50yum2b7i8ub29o6qaoq6rlde"
                  init={{
                    plugins: 'link image code',
                    toolbar:
                      'undo redo | bold italic | alignleft aligncenter alignright | code',
                  }}
                  onChange={this.handleEditorChange}
                />
              </div>
              <div className="col-sm-4">
                <div className="jumbotron">
                  <ImageUploader
                    singleImage
                    name="imageInput"
                    withIcon={false}
                    buttonText="Upload image"
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview
                    fileContainerStyle={{ width: '100% !important' }}
                  />
                  <div className="tag-container">
                    <div className=" border-default mb-3">
                      <div className="card-body">
                        <h4 className="card-title">
                          <div className="tag-input">
                            <input
                              className="tag-input-field"
                              type="text"
                              autoComplete="off"
                              placeholder=""
                              aria-label=""
                              name="tags"
                              onChange={this.onInputChange}
                            />
                          </div>
                        </h4>
                        <p className="card-text"> Pick up to 5 tags and sepereate them with a comma</p>
                      </div>
                    </div>
                  </div>
                  <div className="card border-default mb-3">
                    {errors && errors.catId && (
                      <span className="red">
                        {' '}
                        {errors.catId}
                        {' '}
                      </span>
                    )}
                    <div className="card-body">
                      <div id="category-display">
                        <select
                          id="select-category"
                          name="catId"
                          onKeyDown={this.saveDraft}
                          onChange={this.onInputChange}
                          required
                        >
                          <option value="">Please select a category</option>
                          {categories
                            && categories.map(value => (
                              <option key={value.id} value={value.id}>
                                {value.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <button className="btn button" type="submit"> Publish</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

CreateArticle.defaultProps = {
  isLoading: false,
  newArticle: () => {},
  allCategories: () => {},
};
CreateArticle.propTypes = {
  newArticle: propTypes.func,
  isLoading: propTypes.bool,
  allCategories: propTypes.func,
};
const mapStateToProps = state => ({
  isLoading: state.createArticleReducer.isLoading,
  errors:
    state.createArticleReducer.errors
    && state.createArticleReducer.errors.message,
  categories: state.categoryReducer,
  articles: state.createArticleReducer,
});
export const mapDispatchToProps = dispatch => ({
  newArticle: data => dispatch(createArticle(data)),
  allCategories: () => dispatch(getCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateArticle);
