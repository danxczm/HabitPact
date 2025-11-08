import styles from './DaysList.module.scss';
import DayItem from '../DayItem/DayItem';

const daysData = [
  { day: 1, status: 'failed', motivationTooltip: 'Nice!' },
  { day: 2, status: 'failed', motivationTooltip: 'Good!' },
  { day: 3, status: 'failed', motivationTooltip: 'Cool!' },
  { day: 4, status: 'failed', motivationTooltip: 'Great!' },
  { day: 5, status: 'failed', motivationTooltip: 'Super!' },
  { day: 6, status: 'complete', motivationTooltip: 'Strong!' },
  { day: 7, status: 'upcoming', motivationTooltip: 'Amazing!' },
  { day: 8, status: 'upcoming', motivationTooltip: 'Fantastic!' },
  { day: 9, status: 'upcoming', motivationTooltip: 'Incredible!' },
  { day: 10, status: 'upcoming', motivationTooltip: 'Legendary!' },
];

export default function DaysList() {
  return (
    <ul className={styles.days_list}>
      {daysData.map(({ day, status, motivationTooltip }) => (
        <DayItem day={day} status={status} motivationTooltip={motivationTooltip} key={day} />
      ))}
    </ul>
  );
}
