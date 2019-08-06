import React from 'react';
import Error from '../components/Error/Error';

/**
 * Error Component,renders when a user visits an unmatched url
 */
const NotFound = () => <Error statusCode={404} message="Page not found" />;

export default NotFound;
