import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const App = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);

  return (
    <div className="app">
      <Header />
      <GamePlay />
      <Instructions />

      {/* <Modal text="Try again" />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence> */}
    </div>
  );
};

export default App;
