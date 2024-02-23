import React, { useLayoutEffect } from "react";
import { pgnView } from "@mliebelt/pgn-viewer";

// Define props interface
interface PGNViewerProps {
  pgn: string;
}

const PGNViewer: React.FC<PGNViewerProps> = ({ pgn }) => {
  const gameDescription = String(pgn);
  const id = "board";
  
  // Render chess board using pgnView
  useLayoutEffect(() => {
    pgnView(id, {
      pgn: gameDescription,
      startPlay: 1,
      showResult: true,
      boardSize: "400",
      showFen: false,
      pieceStyle: "merida",
      layout: 'left',
      width: '1000px',
      notationLayout: 'list'
    });
  }, [gameDescription]) 

  // Render the board container
  return <div id={id}></div>;
};

export default PGNViewer;