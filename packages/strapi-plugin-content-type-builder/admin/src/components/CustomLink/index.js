import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import StyledCustomLink from './StyledCustomLink';

const CustomLink = ({ disabled, id, onClick }) => (
  <StyledCustomLink disabled={disabled}>
    <button onClick={onClick} role="button" disabled={disabled}>
      <p>
        <i className="fa fa-plus" />
        {id && <FormattedMessage id={id} />}
      </p>
    </button>
  </StyledCustomLink>
);

CustomLink.defaultProps = {
  disabled: false,
  id: null,
};

CustomLink.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default memo(CustomLink);
export { CustomLink };
