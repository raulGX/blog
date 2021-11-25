import { parseISO, format } from "date-fns";

import styles from "./dateDisplay.module.css";

type Props = {
  dateString: string;
};

const DateDisplay = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  const [day, month, year] = format(date, "dd/MM/yyyy").split("/");
  return (
    <div className={styles.dateBox}>
      <time dateTime={dateString}>
        <span style={{ fontSize: "16px" }}>
          {day}/{month}
        </span>
        <br />
        <span style={{ fontSize: "18px" }}>{year}</span>
      </time>
    </div>
  );
};

export { DateDisplay };
