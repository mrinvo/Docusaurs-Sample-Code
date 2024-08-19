import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/CodeBlock/LinkButton';
import styles from './styles.module.css';
import IconExternalLink from "@theme/Icon/ExternalLink";

export default function LinkButton({code, className}: Props): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef<number | undefined>(undefined);
  const handleCopyCode = useCallback(() => {
    copy(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);

  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);

  return (
    <button
      type="button"
      aria-label={
        isCopied
          ? translate({
              id: 'theme.CodeBlock.copied',
              message: 'Copied',
              description: 'The copied button label on code blocks',
            })
          : translate({
              id: 'theme.CodeBlock.LinkButtonAriaLabel',
              message: 'Copy code to clipboard',
              description: 'The ARIA label for copy code blocks button',
            })
      }
      title={translate({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.LinkButton,
        isCopied && styles.LinkButtonCopied,
      )}
      onClick={handleCopyCode}>
      <span className={styles.LinkButtonIcons} aria-hidden="true">
        <IconExternalLink className={styles.LinkButtonIcon} />
      </span>
    </button>
  );
}
