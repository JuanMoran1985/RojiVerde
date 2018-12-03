import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home.js'
import ProductContainer from '../product/container/product'
import WithMedia from '../pages/containers/WithMedia'
import data from '../../src/api.json'

const homeContainer = document.getElementById('home-container')

render(<ProductContainer data={data}/>, homeContainer); 