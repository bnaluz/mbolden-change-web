import classNames from 'classnames';
import styles from './GridItem.module.css';

export default function GridItem({
  children,
  desktopSpan,
  mobileSpan,
  desktopOffset,
  mobileOffset,
  className,
}: {
  children: React.ReactNode;
  desktopSpan: number;
  mobileSpan: number;
  desktopOffset?: number;
  mobileOffset?: number;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        styles['grid-item'],
        styles[`col-span-${desktopSpan}`],
        styles[`col-span-m-${mobileSpan}`],
        desktopOffset && styles[`col-offset-${desktopOffset}`],
        mobileOffset && styles[`col-offset-m-${mobileOffset}`],
        className
      )}
    >
      {children}
    </div>
  );
}
