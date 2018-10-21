import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { general } from '../styles/styles';

const {sectionText} = general;

const ValidarProps = props => (
    <Text style={sectionText}>
        {props.label}
        {props.ano + 2000}
    </Text>
)

ValidarProps.defaultProps = {
    label: 'Ano ',
}

ValidarProps.propTypes = {
    label: PropTypes.string,
    ano: PropTypes.number.isRequired
}

export default ValidarProps