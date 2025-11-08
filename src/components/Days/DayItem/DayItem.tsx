import styles from './DayItem.module.scss';

interface DayItemProps {
  day: number;
  status: string;
  motivationTooltip: string;
}

export default function DayItem({ day, status, motivationTooltip }: DayItemProps) {
  return (
    <li key={day} data-tooltip={motivationTooltip} className={styles['day-item']}>
      <div className={`${styles['day-item-container']} ${styles[status]}`}>
        <p className={styles['day-item-container__value']}>{day}</p>
      </div>
    </li>
  );
}
