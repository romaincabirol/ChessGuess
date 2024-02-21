import React, { useLayoutEffect, ReactNode } from "react";
import { pgnView } from "@mliebelt/pgn-viewer";

// Define props interface
interface PGNViewerProps {
  children: ReactNode;
}

const PGNViewer: React.FC<PGNViewerProps> = ({ children }) => {
  const gameDescription = String(children);
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