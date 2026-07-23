import React from "react";
import styles from "../assets/styles/footer.module.css";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiAmazonLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <section className={styles.buttonHolder}>
        <button className={styles.buttonfooter}>Sign in for more access</button>
      </section>
      <section className={styles.boxHolder}>
        <div className={styles.firstBox}>
          <p>Follow IMDB On Social</p>
          <div className={styles.mediaHolder}>
            <FaTiktok className={styles.mediaIcon} />
            <FiInstagram className={styles.mediaIcon} />
            <BsTwitterX className={styles.mediaIcon} />
            <AiOutlineYoutube className={styles.mediaIcon} />
            <LiaFacebookSquare
              className={`${styles.mediaIcon} ${styles.faceBook}`}
            />
          </div>
        </div>
        <div className={styles.secondBox}>
          <p>Get the IMDb app</p>
          <p>For Android & IOS</p>
        </div>
      </section>
      <div className={styles.FirstRowLink}>
        <ul>
          <li>
            <a href="">
              Help
            </a>
                          <PiKeyReturnLight className={styles.returnIcon}/>

          </li>
          <li>
            <a href="">
              Site Index
            </a>
                          <PiKeyReturnLight className={styles.returnIcon}/>

          </li>
          <li>
            <a href="">
              IMDbPro
            </a>
                          <PiKeyReturnLight className={styles.returnIcon}/>

          </li>
          <li>
            <a href="">
              Box Office Mojo
            </a>
                          <PiKeyReturnLight className={styles.returnIcon}/>

          </li>
          <li>
            <a href="">
              License IMDb Data
            </a>
                          <PiKeyReturnLight className={styles.returnIcon}/>

          </li>
        </ul>
      </div>
      <div className={styles.secondRowLink}>
        <ul>
          <li><a href="">Press Room</a></li>
          <li><a href="">Advertising</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Condition Of Use</a></li>
          <li><a href="">privacy & policy</a></li>
          <li><a href="">Your Ads Privacy Choices</a></li>
        </ul>
      </div>
      <div className={styles.brandName}>
        <p>an <RiAmazonLine /> company</p>
        <p>&copy; 1990-2026 by IMDb.com, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
