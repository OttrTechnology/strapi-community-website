import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./BountyCard.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  bountyAmt: string;
  description: string;
  linkTo: string;
}

export const BountyCard = ({
  imageSrc,
  imageAlt = "",
  title,
  bountyAmt = "n/a",
  description,
  linkTo = "#",
}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={84}
        height={84}
        className={styles.image}
      />

      <div className={styles.body}>
        <h3 className="sc-heading--four mb-6">{title}</h3>

        <p className={styles.bounty}>${bountyAmt}</p>

        <p className="sc-body--small">{description}</p>
      </div>

      <div className={styles.footer}>
        <Link href={linkTo} className={styles.link}>
          {/* put 13 padding left */}
          <span className="mr-2">View Bounty</span>
          <BiRightArrowAlt size={24} />
        </Link>
      </div>
    </div>
  );
};