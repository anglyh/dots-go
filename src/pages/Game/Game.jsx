import React, { useState } from "react";
import Card from "../../components/game/Card/Card";
import styles from "./Game.module.css";
import Board from "../../components/game/Board/Board";
import PictogramList from "../../components/game/PictogramList/PictogramList";
import Number from "../../components/game/Number/Number";
import Button from "../../components/common/Button/Button"

export default function Game() {
  const COLORS = ["white", "red", "black", "yellow", "blue", "green", "orange"];
  const NUMBERS = [
    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 3, 4.1, 4.2, 4.3, 5.1, 5.2,
    6.1, 6.2, 7, 8, 9,
  ];

  const [topPictogram, setTopPictogram] = useState(null);
  const [centerCards, setCenterCards] = useState([]);
  const [bottomNumber, setBottomNumber] = useState(null);

  const movePictogramToTop = (pictogram) => {
    console.log(pictogram.id);  
    setTopPictogram(pictogram);
  };

  const removePictogram = () => {
    setTopPictogram(null);
  }

  const moveCardToCenter = (color) => {
    console.log(color);
    if (centerCards.length < 3 && !centerCards.includes(color)) {
      setCenterCards([...centerCards, color]); // Se mantienen los colores y agrega uno más
    }
  };

  const removeCardFromCenter = (index) => {
    console.log(index);
    setCenterCards(centerCards.filter((_, i) => i !== index)); // Filtra las que son diferentes al indice
  };

  const moveNumberToBottom = (number) => {
    console.log(number);
    setBottomNumber(number); // Simplemente establece el nuevo número
  };

  const removeNumberFromBottom = () => {
    setBottomNumber(null); // Elimina el número estableciéndolo a null
  };

  // Función para confirmar y mostrar resultados
  const confirmResults = () => {
    const result = {
      pictogram: topPictogram ? topPictogram.id : null,
      color: centerCards,
      number: bottomNumber,
    };
    console.log(result)
  }

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.gameContainer}>
        <PictogramList 
          onPictogramSelect={movePictogramToTop}
          selectedPictogram={topPictogram}
        />
        <Board 
          topPictogram={topPictogram}
          onPictogramRemove={removePictogram}
          centerCards={centerCards} 
          onCardRemove={removeCardFromCenter}
          bottomNumber={bottomNumber}  // Cambiado a bottomNumber
          onNumberRemove={removeNumberFromBottom}
        />
        <div className={styles.numbersContainer}>
          {NUMBERS.map((number, index) => (
            <Number 
              key={index} 
              number={number} 
              onClick={() => moveNumberToBottom(number)}
              disabled={bottomNumber !== null} // Deshabilita si ya hay un número en el centro
            />
          ))}
        </div>
      </div>
      
      <div className={styles.acceptButton}>
        <Button onClick={confirmResults} disabled={!topPictogram || centerCards.length === 0 || bottomNumber === null}>
          Confirmar
        </Button>
      </div>

      <div className={styles.cardContainer}>

        {COLORS.map((color, index) => (
          <Card
            key={index}
            cardColor={color}
            onClick={() => moveCardToCenter(color)}
            inHand={true}
          />
        ))}
      </div>
    </div>
  );
}