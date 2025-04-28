import classNames from 'classnames';
import styles from './Grid.module.css';

export default function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={classNames(styles.grid, className)}>{children}</div>;
}
