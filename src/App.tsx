import "./App.css";
import Pgnviewer from "./components/Pgnviewer";

function App() {
  return (
    <div>
      <img src={"./src/assets/react.svg"} className="App-logo" alt="logo" />
      <Pgnviewer>
        {`[Event "Rated Classical game"]
[Result "0-1"]
[UTCDate "2017.05.31"]
[UTCTime "22:00:02"]
[WhiteElo "1732"]
[BlackElo "1708"]
[TimeControl "600+0"]
[Termination "Normal"]

1. e4 e5 2. Nf3 { [%clk 0:09:57] } Nc6 { [%clk 0:09:59] } 3. Bc4 { [%clk 0:09:56] } Bc5 { [%clk 0:09:56] } 4. Nc3 { [%clk 0:09:54] } Nf6 { [%clk 0:09:52] } 5. O-O { [%clk 0:09:51] } O-O { [%clk 0:09:51] } 6. h3 { [%clk 0:09:47] } Nd4 { [%clk 0:09:50] } 7. Nh2 { [%clk 0:09:37] } b5 { [%clk 0:09:30] } 8. Bd3 { [%clk 0:09:32] } c6 { [%clk 0:09:22] } 9. a3 { [%clk 0:09:27] } d5 { [%clk 0:09:01] } 10. exd5 { [%clk 0:09:23] } cxd5 { [%clk 0:08:57] } 11. b4 { [%clk 0:09:20] } Bb6 { [%clk 0:08:43] } 12. Nxb5 { [%clk 0:09:14] } Nxb5 { [%clk 0:08:32] } 13. Bxb5 { [%clk 0:09:11] } a6 { [%clk 0:08:30] } 14. Bc6 { [%clk 0:09:01] } Rb8 { [%clk 0:08:20] } 15. a4 { [%clk 0:08:52] } Qd6 { [%clk 0:08:07] } 16. b5 { [%clk 0:08:48] } axb5 { [%clk 0:07:52] } 17. axb5 { [%clk 0:08:44] } Ne4 { [%clk 0:07:24] } 18. Qf3 { [%clk 0:08:20] } Ng5 { [%clk 0:06:53] } 19. Qxd5 { [%clk 0:08:16] } Qg6 { [%clk 0:06:19] } 20. Ng4 { [%clk 0:08:09] } Bxg4 { [%clk 0:06:08] } 21. hxg4 { [%clk 0:08:04] } Kh8 { [%clk 0:05:22] } 22. d3 { [%clk 0:07:52] } Ne6 { [%clk 0:05:08] } 23. Qxe5 { [%clk 0:07:43] } Qxg4 { [%clk 0:04:46] } 24. Bb2 { [%clk 0:07:29] } f6 { [%clk 0:04:42] } 25. Qh2 { [%clk 0:07:09] } Bd4 { [%clk 0:04:35] } 26. c3 { [%clk 0:06:56] } Be5 { [%clk 0:04:21] } 27. g3 { [%clk 0:06:26] } Nf4 { [%clk 0:04:13] } 28. d4 { [%clk 0:06:23] } Ne2+ { [%clk 0:04:01] } 29. Kh1 { [%clk 0:06:13] } Bd6 { [%clk 0:03:16] } 30. Rae1 { [%clk 0:05:55] } f5 { [%clk 0:03:10] } 31. Qg2 { [%clk 0:05:23] } Rf6 { [%clk 0:03:06] } 32. c4 { [%clk 0:05:03] } Rh6+ { [%clk 0:03:03] } 33. Qh2 { [%clk 0:04:47] } Rxh2+ { [%clk 0:03:02] } 34. Kxh2 { [%clk 0:04:45] } Qh5+ { [%clk 0:02:55] } 35. Kg2 { [%clk 0:04:42] } Qg4 { [%clk 0:02:38] } 36. Bf3 { [%clk 0:04:34] } Nf4+ { [%clk 0:02:33] } 37. Kh1 { [%clk 0:04:23] } Qxf3+ { [%clk 0:02:25] } 38. Kh2 { [%clk 0:04:22] } Qg2# { [%clk 0:02:18] } 0-1`}
      </Pgnviewer>
    </div>
  );
}

export default App;
