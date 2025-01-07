import Link from "next/link";
import styles from "./not-found.module.css";
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        Oops! The page you are looking for doesn’t exist or may have been moved.
      </p>
      <p>
        Check the URL for any typos or go back to the{" "}
        <span className={styles.cta}>
          <Link href="/">homepage</Link>
        </span>
      </p>
      <p>If you believe this is an error, please contact our support team.</p>
    </div>
  );
}
