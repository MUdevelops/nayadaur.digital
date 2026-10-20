import { cx } from '../lib/cx.js'

/**
 * Standard page section: semantic <section>, labelled by its heading,
 * with a centered container. `dark` = green background, `pattern` = faint motif.
 */
export default function Section({ id, titleId, dark = false, pattern = false, narrow = false, className, children }) {
  return (
    <section id={id} className={cx('section', dark && 'section--dark', pattern && 'pat', className)} aria-labelledby={titleId}>
      <div className={cx('container', narrow && 'container--narrow')}>{children}</div>
    </section>
  )
}
