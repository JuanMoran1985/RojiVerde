import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home.js'
//import data from './src/catalogo.json'

const homeContainer = document.getElementById('home-container')

render(<Home />, homeContainer); 