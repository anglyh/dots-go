import React from 'react'
import styles from "./PictogramList.module.css"
import Pictogram from './Pictogram'
import GHS01 from "../../../assets/images/pictograms/GHS01.svg"
import GHS02 from "../../../assets/images/pictograms/GHS02.svg"
import GHS03 from "../../../assets/images/pictograms/GHS03.svg"
import GHS04 from "../../../assets/images/pictograms/GHS04.svg"
import GHS05 from "../../../assets/images/pictograms/GHS05.svg"
import GHS06 from "../../../assets/images/pictograms/GHS06.svg"
import GHS07 from "../../../assets/images/pictograms/GHS07.svg"
import GHS08 from "../../../assets/images/pictograms/GHS08.svg"
import GHS09 from "../../../assets/images/pictograms/GHS09.svg"

const PICTOGRAMS = [
  { id: 'GHS01', src: GHS01 },
  { id: 'GHS02', src: GHS02 },
  { id: 'GHS03', src: GHS03 },
  { id: 'GHS04', src: GHS04 },
  { id: 'GHS05', src: GHS05 },
  { id: 'GHS06', src: GHS06 },
  { id: 'GHS07', src: GHS07 },
  { id: 'GHS08', src: GHS08 },
  { id: 'GHS09', src: GHS09 },
];

export default function PictogramList({ onPictogramSelect, selectedPictogram }) {
  return (
    <div className={styles.pictogramList}>
      {PICTOGRAMS.map((pictogram) => (
        <Pictogram
          key={pictogram.id}
          src={pictogram.src}
          onClick={() => onPictogramSelect(pictogram)}
          disabled={selectedPictogram !== null}
        />
      ))}
    </div>
  )
}