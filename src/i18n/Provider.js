import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './messages';

function Provider({ children, locale = 'pt' }) {
    return (
        <IntlProvider
        textComponent={Fragment}
        locale={locale}
        messages={messages[locale]}>
        {children}
      </IntlProvider>
    )
}

export default Provider
