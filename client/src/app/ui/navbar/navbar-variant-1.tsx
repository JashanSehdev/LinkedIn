"use client";
import { Box, Icon } from "@mui/material";
import styles from "./navbar-1.module.css";

const linkedIn_logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuuIoHV1Agjydqcf0Z9UaXTKRvdGcPD2_xM6yt-WxDAPgyJm-";

export default function Navbar() {
  return (
    <Box className={styles.container}>
      <Box className={styles.nav}>
        <Box className={styles.logo} component={"img"} src={linkedIn_logo} />
        <Box className={styles.utilities}>
          <Box className={styles.icons}>
            <Box className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="rocket-medium"
                aria-hidden="true"
                data-supported-dps="24x24"
                fill="currentColor"
                focusable="false"
                className="lazy-loaded"
                width="30"
                height="30"
              >
                <path d="M19.88 3.01l-4.9.72a4.71 4.71 0 00-3.18 1.84L9.98 7.99H7c-.63 0-1.22.3-1.6.8L3 11.99h4.35c-.43.77-.91 1.64-1.4 2.54l3.5 3.5c.91-.5 1.78-.98 2.55-1.42v4.38l3.2-2.4c.5-.38.8-.97.8-1.6v-3.02l2.4-1.8a4.672 4.672 0 001.84-3.18l.74-4.87c.08-.65-.47-1.2-1.12-1.12zM15 10.98c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-10.04 5.4l2.65 2.65c-2.92 1.58-5.64 2.99-5.64 2.99s1.41-2.72 2.98-5.65z"></path>
              </svg>
              <p>Top Content</p>
            </Box>
            <Box className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                focusable="false"
                className="lazy-loaded"
                aria-busy="false"
              >
                <path
                  d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>people</p>
            </Box>

            <Box className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                focusable="false"
                className="lazy-loaded"
                aria-busy="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                  fill="currentColor"
                  fillOpacity=".25"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                  fill="currentColor"
                  fillOpacity=".6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>learning</p>
            </Box>
            <Box className={styles.icon}>
              <Icon
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  focusable="false"
                  aria-busy="false"
                >
                  <path
                    d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Icon>
              <p>jobs</p>
            </Box>
            <Box className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="30"
                viewBox="0 0 21 20"
                fill="none"
                focusable="false"
                className="lazy-loaded"
                aria-busy="false"
              >
                <path
                  d="M12.3446 11.8441C12.718 11.4706 13.2378 11.2385 13.8081 11.2385C14.7569 11.2385 15.5543 11.8744 15.8015 12.7424C15.9328 13.2117 16.2305 13.6155 16.6191 13.8829L20.5 10.002L16.6191 6.12114L16.6797 6.03534C16.9471 5.68712 17.3256 5.42469 17.7597 5.30357C18.6277 5.05629 19.2636 4.25891 19.2636 3.31013C19.2636 2.73986 19.0314 2.22005 18.658 1.8466C18.2845 1.47314 17.7647 1.241 17.1944 1.241C16.2456 1.241 15.4483 1.87688 15.201 2.74491C15.0799 3.17892 14.8174 3.55742 14.4692 3.8249L14.3834 3.88546L10.4975 -0.000488281L6.61658 3.88041C6.8891 4.27405 7.28779 4.56676 7.75713 4.70302C8.62516 4.95031 9.26104 5.74768 9.26104 6.69646C9.26104 7.26673 9.02889 7.78654 8.65544 8.16C8.28198 8.53345 7.76218 8.7656 7.1919 8.7656C6.24312 8.7656 5.44575 8.12971 5.19846 7.26169C5.06725 6.79234 4.76949 6.38861 4.3809 6.12114L0.5 9.99699L4.3809 13.8779L4.32034 13.9637C4.05286 14.3119 3.67436 14.5743 3.24035 14.6954C2.37232 14.9427 1.73644 15.7401 1.73644 16.6889C1.73644 17.2592 1.96858 17.779 2.34204 18.1524C2.71549 18.5259 3.2353 18.758 3.80558 18.758C4.75435 18.758 5.55173 18.1221 5.79902 17.2541C5.92014 16.8201 6.18256 16.4416 6.53078 16.1741L6.61658 16.1136L10.4975 19.9945L14.3784 16.1136C14.1059 15.7199 13.7072 15.4272 13.2378 15.291C12.3698 15.0437 11.7339 14.2463 11.7339 13.2975C11.7339 12.7272 11.9661 12.2074 12.3395 11.834L12.3446 11.8441Z"
                  fill="currentColor"
                  fillOpacity=".9"
                ></path>
              </svg>
              <p>games</p>
            </Box>

            {/* icons */}
            <Box className={styles.buttons}>
              {/* buttons */}

              <button className={styles.signInButton}>Sign in</button>
              <button className={styles.joinNowButton}>Join Now</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
