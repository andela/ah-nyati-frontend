/* eslint-disable no-mixed-operators */
import React from 'react';
import propTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import { toastr } from 'react-redux-toastr';
import { Editor } from '@tinymce/tinymce-react';
import './article.scss';
import { connect } from 'react-redux';
import { updateArticle } from '../../actions/article/update';
import { getCategories } from '../../actions/category/categories';
import axiosWithAuth from '../../api/axios';
import Loader from '../Loader';

export class UpdateArticle extends React.Component {
  state = {
    form: {
      title: '',
      catId: '',
      tags: '',
      body: '',
      description: '',
      images: null,
    },
    pictures: [],
    categories: [],
    imageUrl: '',
    imageDescription: '',
  };

  componentDidMount = async () => {
    const token = localStorage.getItem('jwtToken');
    const { allCategories } = await this.props;
    this.setState({ isLoading: true });
    if (!token) {
      this.props.history.push('/login', {});
    }

    allCategories().then((data) => {
      this.setState({
        categories: data.payload[0].categories,
      });
    });

    const { match: { params: { slug }} } = this.props;
    if (slug) {
      axiosWithAuth()
        .get(`/articles/${slug}`)
        .then(({ data }) => {
          if (data.data.length) {
            const res = data.data[0];
            const { article, tag } = res;
            this.setState(prev => ({
              ...prev,
              form: {
                ...prev.form,
                title: article.title,
                description: article.description,
                body: article.body,
                catId: article.catId,
                tags: tag.filter(currentTag => currentTag !== '').join(','),
              },
              imageUrl: article.imageUrl,
              isLoading: false,
            }));
          }
        });
    }
  };

  onDrop = (pictures) => {
    this.setState(prevState => ({ ...prevState, images: pictures[0] }));

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        images: pictures[0],
      },
      imageUrl: '',
    }));

    this.setState({
      imageUrl: '',
      imageDescription:
        'Ensure you select a JPG|PNG|JPEG',
    });
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

  submitHandler = () => {
    const { form } = this.state;
    const { match: { params: { slug } } } = this.props;

    const article = { ...form, isDraft: false };
    const { editedArticle } = this.props;
    this.setState({ isLoading: true });

    editedArticle(slug, article).then((status) => {
      if (status === 200) {
        toastr.success('Article Updated successfully');
        this.props.history.push('/');
        this.setState({ isLoading: false });
      } else {
        toastr.error('Oops something went wrong');
        this.setState({ isLoading: false });
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
    const { match: { params: { slug }} } = this.props;

    const { form } = this.state;

    const { editedArticle } = this.props;
    const article = {
      ...form,
    };
    if (this.validateEmptyFields(form)) {
      return;
    }
    setTimeout(() => {
      editedArticle(slug, article);
    }, 1000);
  };

  render() {
    const { categories, form, isLoading, imageUrl } = this.state;
    const { errors } = this.props;
    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    const {
      title, body, catId, tags, description,
    } = form;

    return (
      <div className="container">
        <section className="section">
          {isLoading && <p className="loading">Loading...</p>}
          <div className="row">
            <div className="col-sm-8">
              {errors && errors.title && (
                <span className="red"> {errors.title} </span>
              )}
              <input
                type="text"
                autoComplete="off"
                placeholder="Title"
                className="Article-Input"
                required
                name="title"
                onChange={this.onInputChange}
                onKeyDown={this.saveDraft}
                value={title}
              />
              <input
                type="text"
                autoComplete="off"
                placeholder="Write a short description of your article"
                className="Article-Input"
                name="description"
                onChange={this.onInputChange}
                value={description}
              />
              {errors && errors.body && (
                <span className="red"> {errors.body} </span>
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
                onKeyDown={this.saveDraft}
              />
            </div>
            <div className="col-sm-4">
              <div className="jumbotron">
                {
                  imageUrl && <img className="imageUrl" src={imageUrl} alt="Article" />
                }
                <ImageUploader
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
                            value={tags}
                          />
                        </div>
                      </h4>
                      <p className="card-text">Pick up to 5 tags and sepereate them with a comma </p>
                    </div>
                  </div>
                </div>
                <div className="card border-default mb-3">
                  {errors && errors.catId && (
                    <span className="red"> {errors.catId} </span>
                  )}
                  <div className="card-body">
                    <div id="category-display">
                      <select
                        id="select-category"
                        name="catId"
                        onChange={this.onInputChange}
                        value={catId}
                      >
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
                <button
                  className="btn button"
                  type="submit"
                  onClick={this.submitHandler}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
UpdateArticle.defaultProps = {
  isLoading: false,
  editedArticle: () => {},
  allCategories: () => {},
};
UpdateArticle.propTypes = {
  editedArticle: propTypes.func,
  isLoading: propTypes.bool,
  allCategories: propTypes.func,
};
export const mapStateToProps = state => ({
  isLoading: state.updateArticlesReducer.isLoading,
  errors:
      state.updateArticlesReducer.errors
      && state.updateArticlesReducer.errors.message,
  categories: state.categoryReducer,
  articles: state.updateArticlesReducer,
});
export const mapDispatchToProps = dispatch => ({
  editedArticle: (slug, data) => dispatch(updateArticle(slug, data)),
  allCategories: () => dispatch(getCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateArticle);
